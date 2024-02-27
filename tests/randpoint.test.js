'use strict';

import getRandomPoint from '../src/battleships/getrandompoint';
import Player from '../src/battleships/player';

describe('random point test', () => {
  test('random point should contain only sea and ship cells', () => {
    const player = new Player();
    player.placeShipsRandomly();
    
    const flag = true

    for (let i = 0; i < 100; i++) {
      let cell = getRandomPoint(player);
      if (!(cell.type == 'sea' || cell.type == 'ship')) {
        flag = false
      }
    }
    
    expect(flag).toEqual(true);
  });
});
