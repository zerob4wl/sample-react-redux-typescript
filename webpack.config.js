const autoprefixer = require("autoprefixer");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpack = require("webpack");
const path = require("path");

// variables
const isProduction = process.argv.indexOf("-p") >= 0;
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
        main: ["@babel/polyfill", "./index.tsx"],
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
            // .ts, .tsx
            {
                test: /\.(js|tsx?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { babelrc: true, plugins: ['react-hot-loader/babel'] }
                    },
                ]
            },
            // static assets
            {test: /\.html$/, use: "html-loader"},
            {test: /\.png$/, use: "url-loader?limit=10000"},
            {test:
                 /\.po$/,
                 loader: 'i18next-po-loader'
             },
            // {
            //     enforce: "pre",
            //     loader: "tslint-loader",
            //     test: /\.tsx?$/,
            // },
            {test: /\.svg$/, use: "file-loader"},
            // {
            //   test: /\.svg$/,
            //   loader: 'svg-inline-loader'
            // },
            {test: /\.(eot|ttf|woff)$/, loader: "file-loader"},
            {test: /\.jpg$/, use: "file-loader"},
            {
                test: /\.less$/,
                use: [
                    require.resolve("style-loader"),
                    require.resolve("css-loader"),
                    {
                        loader: require.resolve("postcss-loader"),
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
                    },
                    {
                        loader: require.resolve("less-loader"),
                        options: {},
                    }
                ],
            },
            {
                test: /\.png$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=images/[name].[ext]',
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
        chunkFilename: '[id].[chunkhash].js',
        path: outPath,
        publicPath: "/",
    },
    plugins: [
        //new UglifyJsPlugin({
        //    test: /\.js($|\?)/i,
        //    sourceMap: isProduction,
        //    uglifyOptions: {
        //        compress: true
        //    }
        //}),
        new LodashModuleReplacementPlugin,
        new webpack.optimize.AggressiveMergingPlugin(),
        new MiniCssExtractPlugin({
            disable: !isProduction,
            filename: "styles.css",
        }),
        new HtmlWebpackPlugin({
            template: "index.html",
        })
    ],
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        // Fix webpack"s default behavior to not load packages with jsnext:main module
        // https://github.com/Microsoft/TypeScript/issues/11677
        mainFields: ["main"],
    },
    target: "web",
    devServer: {
        contentBase: './dist'
    },
    // Fix hot Reload and watch on OSX
    watchOptions: {
        poll: 100
    },
};
