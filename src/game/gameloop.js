'use strict';

import Player from './player';
import Drawer from './drawer';
import getMergedMap from './converter';

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
  }

  #playerInit() {
    this.Player = new Player();
    this.Opponent = new Player();
  }

  #drawerInit() {
    this.PlayerDrawer = new Drawer(this.userField, this.userConfig)
    this.OpponentDrawer = new Drawer(this.rivalField, this.rivalConfig)
  }

  draw(player, drawer) {
    const dataMap = getMergedMap(player.map.value)
    drawer.draw(dataMap)
  }

  eventHandler(x, y) {
    console.log(x, y);
  }
}


export default Gameloop