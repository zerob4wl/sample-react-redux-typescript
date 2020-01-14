const autoprefixer = require("autoprefixer");

const webpack = require("webpack");
const path = require("path");

// variables
/* global process __dirname module */
const isProduction = process.argv.indexOf("-p") >= 0;
const isAnalysis = process.argv.indexOf("-a") >= 0;
const isGHPages = process.argv.indexOf("--ghpages") >= 0;
const sourcePath = path.join(__dirname, "./src");
const outPath = path.join(__dirname, "./dist");

// set env
new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production"),
  },
});

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

// postcss config
const postcssConfig = {
  loader: "postcss-loader",
  options: {
    ident: "postcss", // https://webpack.js.org/guides/migrating/#complex-options
    plugins: () => [
      require("postcss-flexbugs-fixes"),
      autoprefixer({
        flexbox: "no-2009",
      }),
    ],
  },
};

// babel config
const babelLoaderConfig = {
  loader: "babel-loader",
  options: { babelrc: true, plugins: [!isProduction && "react-hot-loader/babel"].filter(Boolean) },
};

// ts loader Config
const tsLoaderConfig = {
  loader: "ts-loader",
  options: {
    transpileOnly: true,
  },
};

module.exports = {
  context: sourcePath,
  devServer: {
    contentBase: sourcePath,
    hot: true,
    quiet: true,
    disableHostCheck: true,
    // remove annoying WDS of React Hot Loader log
    clientLogLevel: "none",
    stats: {
      warnings: false,
    },
  },
  entry: {
    main: [!isProduction && "react-hot-loader/patch", "./index.tsx"].filter(Boolean),
    vendor: ["react", "react-dom", "react-redux", "react-router", "redux"],
  },
  module: {
    rules: [
      // .js, .jsx
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: [babelLoaderConfig],
      },
      // .ts, .tsx
      {
        test: /\.(tsx?)$/,
        exclude: /node_modules/,
        use: [babelLoaderConfig, isProduction && tsLoaderConfig].filter(Boolean),
      },
      // static assets
      { test: /\.html$/, use: "html-loader" },
      { test: /\.po$/, loader: "i18next-po-loader" },
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
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.module.less$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              url: false,
              localIdentName: "[name]__[local]___[hash:base64:5]",
              sourceMap: !isProduction,
            },
          },
          postcssConfig,
          {
            loader: "less-loader",
            options: {
              // https://github.com/webpack-contrib/less-loader/issues/109
              // in case font and some css wont resolve
              rewriteUrls: "local",
              sourceMap: !isProduction,
            },
          },
        ],
      },
      {
        test: /\.(less|css)$/,
        exclude: /\.module.less$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          postcssConfig,
          {
            loader: "less-loader",
            options: {
              sourceMap: !isProduction,
            },
          },
        ],
      },
      {
        test: /\.(svg|jpe?g|png|eot|ttf|woff2?)$/,
        exclude: /node_modules/,
        loader: "url-loader",
        query: {
          limit: 10000,
          name: "images/[name].[ext]",
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
    ],
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          minChunks: 1,
          priority: -10,
        },
      },
    },
    runtimeChunk: true,
  },
  node: {
    // workaround for webpack-dev-server issue
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: "empty",
    net: "empty",
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].[chunkhash:4].js",
    path: outPath,
    publicPath: isGHPages ? "./" : "/",
  },
  plugins: [
    new HardSourceWebpackPlugin(),
    // since we use babel-lodash-plugin this webpack plugin is optional
    new LodashModuleReplacementPlugin({
      shorthands: true,
    }),
    new CleanWebpackPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new MiniCssExtractPlugin({
      disable: !isProduction,
      filename: "[name][hash].css",
      chunkFilename: "[name].[chunkhash:4].css",
    }),

    new HtmlWebpackPlugin({
      template: "!!compile-ejs-loader!src/index.html",
      inject: "head",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "defer",
    }),
    new Dotenv(),
    new BundleAnalyzerPlugin({ analyzerMode: !isAnalysis ? "disable" : "server" }),
    new webpack.HotModuleReplacementPlugin(),
    /* PWA plugin related */
    new ManifestPlugin({
      fileName: "asset-manifest.json",
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      exclude: [/\.map$/, /asset-manifest\.json$/],
      importWorkboxFrom: "cdn",
      navigateFallback: "src/index.html",
      navigateFallbackBlacklist: [
        /* Exclude URLs starting with /_, as they're likely an API call */
        new RegExp("^/_"),
        /* Exclude URLs containing a dot, as they're likely a resource in */
        /* public/ and not a SPA route */
        new RegExp("/[^/]+\\.[^/]+$"),
      ],
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, "tsconfig.json"),
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      src: path.resolve(__dirname, "src"),
    },
    // Fix webpack"s default behavior to not load packages with jsnext:main module
    // https://github.com/Microsoft/TypeScript/issues/11677
    mainFields: ["main"],
  },
  target: "web",
  // Fix hot Reload and watch on OSX
  watchOptions: {
    poll: 100,
  },
};
