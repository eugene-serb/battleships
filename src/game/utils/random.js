'use strict';

export function getRandomElement(array) {
  const i = parseInt(Math.random() * array.length);
  return array[i];
}

export function getRandomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
