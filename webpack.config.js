'use strict';

const path = require('path');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const babelConfig = require('./babel.config');
const { ENTRIES, PAGES } = require('./src');

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'development',
    context: path.resolve(__dirname, 'src'),
    entry: ENTRIES,
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimize: true,
      innerGraph: true,
      usedExports: true,
    },
    resolve: {
      extensions: ['.js', '.mjs', '.jsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    devServer: {
      watchFiles: path.join(__dirname, 'src'),
      static: {
        directory: path.join(__dirname, 'static'),
      },
      compress: true,
      port: 9000,
    },
    plugins: [
      new ESLintWebpackPlugin(),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'static'),
            to: path.resolve(__dirname, 'build'),
          },
        ],
      }),
      ...PAGES,
    ],
    module: {
      rules: [
        {
          test: /\.m?jsx?$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: babelConfig,
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
};
