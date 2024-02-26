'use strict';

import Player from '../src/battleships/player';

describe('Player class test', () => {
  test('player loses when all ships is dead', () => {
    const player = new Player();
    player.placeShipsRandomly();

    for (let ship of player.ships) {
      ship.isDead = true;
    }
    expect(player.isLost()).toEqual(true);
  });
});
