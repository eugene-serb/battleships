'use strict';

import explodeShip from '../src/battleships/explodeship';
import Player from '../src/battleships/player';

describe('Explode ship test', () => {
  test('explode on corners', () => {
    const player = new Player();
    const points = [0, 9];

    let flag = true;

    for (const y of points) {
      for (const x of points) {
        if (!player.createShip(y, x, 1, 1)) {
          flag = false;
        }
      }
    }

    for (const ship of player.ships) {
      explodeShip(player.map, ship);
    }

    const live_cells = player.getUntouchedCells();

    expect(flag && live_cells.length == 100 - 12).toEqual(true);
  });
});
