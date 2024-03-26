'use strict';

import Board from '@/game/models/map';

describe('Map test', () => {
  test('New map contains all rows and columns', () => {
    let width = 48;
    let height = 24;

    const map = new Board(width, height);

    expect(map.value.length).toBe(height);
    expect(map.value[0].length).toBe(width);
  });
});
