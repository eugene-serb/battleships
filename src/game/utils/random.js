'use strict';

export function getRandomElement(array) {
  const i = parseInt(Math.random() * array.length);
  return array[i];
}
