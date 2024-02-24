'use strict';

module.exports = {
  root: true,
  env: {
    es2022: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
