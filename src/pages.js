'use strict';

const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  new HTMLWebpackPlugin({
    inject: true,
    template: './pages/index/index.html',
    filename: 'index.html',
    chunks: ['index'],
  }),
];
