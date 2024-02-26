'use strict';

import Map from "../src/battleships/map";

describe('Map test', () => {
  test('new map contains all rows and columns', () => {
    let width = 48
    let height = 24

    const map = new Map(width, height)

    expect(map.map.length).toEqual(height);
    expect(map.map[0].length).toEqual(width);
  });
});
