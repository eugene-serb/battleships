'use strict';

import Map from '@/game/map';

describe('Map test', () => {
  test('New map contains all rows and columns', () => {
    let width = 48;
    let height = 24;

    const map = new Map(width, height);

    expect(map.value.length).toBe(height);
    expect(map.value[0].length).toBe(width);
  });
});
