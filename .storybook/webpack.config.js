const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(tsx?)/,
      use: [
        "babel-loader",
        {
          loader: "react-docgen-typescript-loader",
        },
      ],
    },
    {
      test: /\.module.less$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: true,
            localIdentName: "[name]__[local]___[hash:base64:5]",
          },
        },
        {
          loader: "less-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
    },
    {
      test: /\.(less)$/,
      exclude: /\.module.less$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "less-loader",
        },
      ],
    }
  );

  config.resolve.extensions.push(".ts", ".tsx");
  config.plugins = config.plugins.concat([
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, "../", "tsconfig.json"),
      },
    }),
    new HardSourceWebpackPlugin(),
  ]);
  config.resolve.alias = { ...config.resolve.alias, src: path.resolve(__dirname, "../", "src") };

  return config;
};
