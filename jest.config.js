'use strict';

module.exports = {
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['js', 'json'],
};
