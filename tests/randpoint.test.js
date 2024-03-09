'use strict';

import getRandomCell from '../src/game/getrandomcell';
import Player from '../src/game/player';

describe('random point test', () => {
  test('random point should contain only sea and ship cells', () => {
    let flag = true;
    let player = new Player();
    for (let i = 0; i < 100; i++) {
      let cell = getRandomCell(player);

      if (!(cell.type == 'sea' || cell.type == 'ship')) {
        flag = false;

        cell.type = 'sea-hit';
      }
    }

    expect(flag).toBe(true);
  });
});
