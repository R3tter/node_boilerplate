const webpack = require('webpack');

const { src, dist } = require('./paths').main;

const { version } = require('../package.json');

module.exports = env => ({
  entry: src,
  output: {
    publicPath: '/',
    path: dist,
    filename: 'index.js'
  },
  target: 'node',
  mode: 'production',
  optimization: {
    minimize: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      DEV: JSON.stringify(false),
      PROD: JSON.stringify(true),
      VERSION: JSON.stringify(version)
    })
  ]
});
