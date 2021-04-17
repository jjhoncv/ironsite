const { merge } = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./config.base.js');

module.exports = merge(baseConfig, {
  output: {
    filename: '[name].min.js',
  },
  module: {
    // rules: [
    //   {
    //     test: /\.(sc|c)ss$/,
    //     use: [
    //       {
    //         loader: MiniCssExtractPlugin.loader,
    //         options: {
    //           hmr: false,
    //         },
    //       },
    //       'css-loader',
    //       'sass-loader'
    //     ]
    //   }
    // ]
  },
  optimization: {
    splitChunks: {
      // chunks: 'all'
    }
  },
  resolve: {
    alias: {
      "react": "preact/compat",
      "react-dom": "preact/compat"
    }
  },
  devtool: 'hidden-source-map',
  mode: 'production',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      append: `\n//# sourceMappingURL=/statics/js/[url]`

    })
  ]
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: '[name].min.css'
  //   }),
  // ],

});