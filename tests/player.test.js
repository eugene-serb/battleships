'use strict';

import Player from '../src/battleships/player';

describe('Player class test', () => {
  test('standart cell type is equal to sea', () => {
    const player = new Player();

    expect(cell.type).toEqual('sea');
  });
});
