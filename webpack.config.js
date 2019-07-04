const autoprefixer = require("autoprefixer");

const webpack = require("webpack");
const path = require("path");

// variables
const isProduction = process.argv.indexOf("-p") >= 0;
const isAnalysis = process.argv.indexOf("-a") >= 0;
const sourcePath = path.join(__dirname, "./src");
const outPath = path.join(__dirname, "./dist");

// set env
new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
})

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const tsImportPluginFactory = require('ts-import-plugin');

// postcss config
const postcssConfig = {
    loader: "postcss-loader",
    options: {
        ident: "postcss", // https://webpack.js.org/guides/migrating/#complex-options
        plugins: () => [
            require("postcss-flexbugs-fixes"),
            autoprefixer({
                browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 9", // React doesn"t support IE8 anyway
                ],
                flexbox: "no-2009",
            }),
        ],
    },
}

// babel config
const babelLoaderConfig = {
    loader: 'babel-loader',
    options: {babelrc: true, plugins: ['react-hot-loader/babel']}
}

// ts loader Config
const tsLoaderConfig = {
    loader: "ts-loader",
    options: {
        getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
                style: false,
                libraryName: 'lodash',
                libraryDirectory: null,
                camel2DashComponentName: false
            })]
        }),
        compilerOptions: {
            module: 'es2015'
        }
    }
}

module.exports = {
    context: sourcePath,
    devServer: {
        contentBase: sourcePath,
        hot: true,
        disableHostCheck: true,
        stats: {
            warnings: false,
        },
    },
    entry: {
        main: ["@babel/polyfill", "react-hot-loader/patch", "./index.tsx"],
        vendor: [
            "react",
            "react-dom",
            "react-redux",
            "react-router",
            "redux",
        ],
    },
    module: {
        rules: [
            // .js, .jsx
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                use: [babelLoaderConfig]
            },
            // .ts, .tsx
            {
                test: /\.(tsx?)$/,
                exclude: /node_modules/,
                use: [
                    !isProduction && babelLoaderConfig,
                    tsLoaderConfig
                ].filter(Boolean)
            },
            // static assets
            {test: /\.html$/, use: "html-loader"},
            {test: /\.po$/, loader: 'i18next-po-loader'},
            // {
            //     enforce: "pre",
            //     loader: "tslint-loader",
            //     test: /\.tsx?$/,
            // },
            // {
            //   test: /\.svg$/,
            //   loader: 'svg-inline-loader'
            // },
            {
                test: /\.module.less$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                    {
                        loader: "css-loader", options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    postcssConfig,
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: !isProduction
                        },
                    }
                ]
            },
            {
                test: /\.less$/,
                exclude: /\.module.less$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    postcssConfig,
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: !isProduction
                        },
                    }
                ],
            },
            {
                test: /\.(svg|jpe?g|png|eot|ttf|woff2?)$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'images/name=images/[name].[ext]'
                }
            },
        ],
    },
    optimization: {
        splitChunks: {
            name: true,
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    minChunks: 1,
                    priority: -10
                }
            }
        },
        runtimeChunk: true
    },
    node: {
        // workaround for webpack-dev-server issue
        // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
        fs: "empty",
        net: "empty",
    },
    output: {
        filename: "[name].js",
        chunkFilename: '[name].[chunkhash:4].js',
        path: outPath,
        publicPath: "/",
    },
    plugins: [
        new HardSourceWebpackPlugin(),
        // since we use babel-lodash-plugin this webpack plugin is optional
        new LodashModuleReplacementPlugin,
        new CleanWebpackPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new MiniCssExtractPlugin({
            disable: !isProduction,
            filename: "[name][hash].css",
            chunkFilename: '[name].[chunkhash:4].css',
        }),

        new HtmlWebpackPlugin({
            template: "index.html",
            inject: 'head'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new BundleAnalyzerPlugin({analyzerMode: !isAnalysis ? 'disable' : 'server'}),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        alias: {
            src: path.resolve(__dirname, 'src'),
        },
        // Fix webpack"s default behavior to not load packages with jsnext:main module
        // https://github.com/Microsoft/TypeScript/issues/11677
        mainFields: ["main"],
    },
    target: "web",
    // Fix hot Reload and watch on OSX
    watchOptions: {
        poll: 100
    },
};
