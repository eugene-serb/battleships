'use strict';

import Player from '@/game/models/player';
import Drawer from '@/game/drawer';
import attack from '@/game/attack';
import Computer from '@/game/computer';
import { getMergedMap } from '@/game/utils/map';
import {
  USER_FIELD_ID_SELECTOR,
  RIVAL_FIELD_ID_SELECTOR,
  RESTART_BUTTON_ID_SELECTOR,
  TEXT_BANNER_ID_SELECTOR,
  PLAYER_WIN_TEXT,
  RIVAL_WIN_TEXT,
  DRAWER_CONFIG,
} from '@/game/constants/common';
import { getRandomNumber } from '@/game/utils/random';

class Gameloop {
  constructor() {
    this.#getDOM();
    this.#addEventListeners();
    this.#init();
    this.#draw();
  }

  #init() {
    this.textElement.textContent = '';

    this.endGame = false;
    this.playerMove = true;

    this.player = new Player();
    this.opponent = new Player();


    this.userConfig = structuredClone(DRAWER_CONFIG);
    this.#addEventToConfig(this.userConfig, 2, 'click', this.#eventTurnShip.bind(this))
    
    this.rivalConfig = structuredClone(DRAWER_CONFIG);
    this.#addEventToConfig(this.rivalConfig, 0, 'click', this.#eventAttack.bind(this));

    this.playerDrawer = new Drawer(this.userField, this.userConfig);
    this.opponentDrawer = new Drawer(this.rivalField, this.rivalConfig);

    this.bot = new Computer(this.player);
  }

  #draw() {
    this.playerDrawer.draw(getMergedMap(this.player.map.value));
    this.opponentDrawer.draw(getMergedMap(this.opponent.map.value, true));
  }

  #restart() {
    this.#init();
    this.#draw();
  }

  #showText(text) {
    this.textElement.classList.add('win-text');
    this.textElement.textContent = text;
  }

  #checkEndgame() {
    return this.player.isLost() || this.opponent.isLost();
  }

  async #eventAttack(y, x) {
    if (this.endGame || !this.playerMove) {
      return;
    }

    const attackResult = attack(this.opponent, y, x);

    if (!attackResult) {
      this.playerMove = false;

      this.opponentDrawer.draw(getMergedMap(this.opponent.map.value, true), false);
      let compAttackResult = false;

      do {
        const delayTime = getRandomNumber(200, 1000);
        await new Promise((r) => setTimeout(r, delayTime));

        const [y, x] = this.bot.getAttackCoordinate();
        compAttackResult = attack(this.player, y, x);
        this.playerDrawer.draw(getMergedMap(this.player.map.value));
      } while (compAttackResult && !this.#checkEndgame());

      this.playerMove = true;
    }

    if (this.#checkEndgame()) {
      const endgameMessage = this.player.isLost() ? RIVAL_WIN_TEXT : PLAYER_WIN_TEXT;
      this.#showText(endgameMessage);
      this.endGame = true;
    }

    this.#draw();
  }

  async #eventTurnShip(y, x) {
    const cell = this.player.map.value[y][x];

    const ship = this.player.shipPointers.get(cell)
    const shipCells = ship.cells
    const shipSize = shipCells.length

    if (shipSize === 1) {
      return
    }
    
    const firstCell = ship.cells[0]
    const secondCell = ship.cells[1]

    const reverseOrientation = (secondCell.y - firstCell.y) ? 0 : 1

    changeCellsType(shipCells, 'sea')

    if (this.player.validShipPosition(firstCell.y, firstCell.x, shipSize, reverseOrientation)) {
      const newShip = this.player.createShip(firstCell.y, firstCell.x, shipSize, reverseOrientation)

      ship.cells = newShip.cells

      for (const shipCell of shipCells) {
        this.player.shipPointers.delete(shipCell)
      }

      this.player.addShipPointers(newShip)

      this.playerDrawer.draw(getMergedMap(this.player.map.value));
    }

    else {
      changeCellsType(shipCells, 'ship')
    }

    function changeCellsType(cells, cellType) {
      for (const cell of cells) {
        cell.type = cellType
      }
    }

    // function changeCellsBorderColor(Cells) {
    //   return
    // }
  }

  #addEventToConfig(config, cellType, eventType, event) {
    if (!('events' in config[cellType])) {
      config[cellType]['events'] = {};
    }

    config[cellType]['events'][eventType] = event;
  }

  #removeEventsFromConfig(config) {
    for (const cellType in config) {
      if ('events' in config[cellType]) {
        delete config.cellType['events'];
      }
    }
  }

  #getDOM() {
    this.userField = document.getElementById(USER_FIELD_ID_SELECTOR);
    this.rivalField = document.getElementById(RIVAL_FIELD_ID_SELECTOR);
    this.textElement = document.getElementById(TEXT_BANNER_ID_SELECTOR);
    this.restartButton = document.getElementById(RESTART_BUTTON_ID_SELECTOR);
  }

  #addEventListeners() {
    this.restartButton.addEventListener('click', this.#restart.bind(this));
  }
}

export default Gameloop;
