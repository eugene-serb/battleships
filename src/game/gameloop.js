'use strict';

import Player from './player';
import Drawer from './drawer';
import getMergedMap from './converter';
import attack from './attack';
import getRandomCellCoord from './getrandomcellcoord';

class Gameloop {
  constructor(userField, rivalField, userConfig, rivalConfig) {
    this.userField = userField
    this.rivalField = rivalField

    this.userConfig = userConfig
    this.rivalConfig = rivalConfig

    this.start();
  }

  start() {
    this.#playerInit();
    this.#drawerInit();

    this.userMove = true
  }

  #playerInit() {
    this.player = new Player();
    this.opponent = new Player();
  }

  #drawerInit() {
    this.PlayerDrawer = new Drawer(this.userField, this.userConfig)
    this.OpponentDrawer = new Drawer(this.rivalField, this.rivalConfig)
  }

  draw() {
    this.PlayerDrawer.draw(getMergedMap(this.player.map.value));
    this.OpponentDrawer.draw(getMergedMap(this.opponent.map.value, true));
  }

  loop() {
    let hit = true

    while (hit) {
      const target = this.userMove ? this.opponent : this.player

      let pos = this.userMove ? this.eventHandler() : getRandomCellCoord(this.opponent)

      hit = attack(target, pos[0], pos[1])

      this.draw()
    }

      this.userMove = !this.userMove
  }

  eventHandler(x, y) {
    console.log(x, y);
    return [y, x]
  }
}


export default Gameloop