const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(tsx?)$/,
      use: [
        {
          loader: 'ts-loader',
        },
        {
          loader: 'react-docgen-typescript-loader',
        },
      ],
    },
    {
      test: /\.module.less$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        {
          loader: 'less-loader',
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
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
        },
      ],
    }
  );

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = { ...config.resolve.alias, src: path.resolve(__dirname, '../', 'src') };

  return config;
};
