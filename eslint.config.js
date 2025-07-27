'use strict';

const { defineConfig } = require('eslint/config');

const globals = require('globals');
const babelParser = require('@babel/eslint-parser');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },

      parser: babelParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {},
    },

    extends: compat.extends('eslint:recommended', 'prettier'),
  },
]);
