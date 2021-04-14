const { merge } = require('webpack-merge');
const baseConfig = require('./config.base.js');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
  output: {
    filename: '[name].js'
  },
  devServer: {
    historyApiFallback: true
  },
  optimization: {
    runtimeChunk: false,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

    ]
  },
  mode: 'development'
});
