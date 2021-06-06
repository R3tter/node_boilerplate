const webpack = require('webpack');

const { src, build } = require('./paths').main;
const { version } = require('../package.json');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = env => ({
  entry: {
    src
  },
  output: {
    publicPath: '/',
    path: build,
    filename: 'index.js'
  },
  target: 'node',
  watch: true,
  devtool: 'cheap-module-source-map',
  mode: 'development',
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
    extensions: ['.js', '.ts']
  },
  plugins: [
    new webpack.DefinePlugin({
      DEV: JSON.stringify(true),
      PROD: JSON.stringify(false),
      VERSION: JSON.stringify(version)
    }),
    new ESLintPlugin({
      extensions: ['js']
    })
  ]
});
