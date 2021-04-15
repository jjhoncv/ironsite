const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { createVarsDefinePlugin, varsUsingWebpack } = require('./utils');

const rootPath = path.join(__dirname, '../../');

varsUsingWebpack();

const publicPath = process.env.CLIENT_STATICS + '/';

module.exports = {
  devtool: 'source-map',
  entry: {
    'home': path.join(rootPath, 'src/client/home.tsx'),
  },
  output: {
    path: path.join(rootPath, 'out'),
    filename: '[name].js',
    publicPath
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@app': rootPath,
      "react": "preact/compat",
      "react-dom": "preact/compat"
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(createVarsDefinePlugin()),
    new HtmlWebpackPlugin({
      hash: true,
      template: path.join(rootPath, 'public/index.html'),
      title: "gege"
    }),
  ]
}
