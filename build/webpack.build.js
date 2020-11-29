const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.base');

const {
  rules, resolve, plugins,
} = base;

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'bundle.js',
    chunkFilename: '[name].js',
    crossOriginLoading: 'anonymous',
  },
  module: {
    rules,
  },
  resolve,
  plugins: [
    new webpack.DefinePlugin({
    }),
    ...plugins,
  ],
};

