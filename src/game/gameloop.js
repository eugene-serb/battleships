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
    this.#addEventToConfig(this.userConfig, 2, 'mousedown', this.#eventChangeShip.bind(this));

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
    if (this.#checkEndgame() || !this.playerMove) {
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
    }

    this.#draw();
  }

  async #eventChangeShip(y, x) {
    const player = this.player

    const container = this.playerDrawer.container
    const cellElement = container.children[`${y * 10 + x}`];

    const cell = this.player.map.value[y][x];
    const ship = this.player.shipPointers.get(cell);
    const shipOrientation = getShipOrientation(ship);
    const shipSize = ship.cells.length;
    const shipOffset = getShipPositionOffset(ship, cell);
    
    let shipOverlayElement, movingOverlay

    const validCells = []
    let invisibleOverlayElements = []

    let pos1 = 0
    let pos2 = 0
    let pos3 = event.clientX
    let pos4 = event.clientY;

    document.body.onmousemove = initialMove.bind(this)
    document.onmouseup = turnShip.bind(this)

    function initialMove() {
      console.log('init')
      changeCellsType(ship.cells, 'sea')

      shipOverlayElement = createOverlayShipElement(cellElement)
      shipOverlayElement.style.backgroundColor = '#88d75b'
  
      movingOverlay = createOverlayShipElement(cellElement)
      
      document.body.appendChild(shipOverlayElement);
      document.body.appendChild(movingOverlay);

      this.playerDrawer.draw(getMergedMap(this.player.map.value))

      for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
          if (this.player.validShipPosition(y, x, shipSize, shipOrientation)) {
            validCells.push(this.player.map.value[y][x])
          }
        }
      }

      invisibleOverlayElements = createInvisibleOverlayElements(validCells)
      addEventsToElements(invisibleOverlayElements)
      
      document.body.onmousemove = elementDrag;
      document.onmouseup = endEvent.bind(this)
    }

    async function turnShip() {
      removeDocumentEvents()

      if (shipSize < 2) {
        return;
      }
  
      const firstCell = ship.cells[0];
  
      const reverseOrientation = +!shipOrientation
  
      changeCellsType(ship.cells, 'sea');
  
      if (this.player.validShipPosition(firstCell.y, firstCell.x, shipSize, reverseOrientation)) {
        replaceShip(ship, firstCell.y, firstCell.x, shipSize, reverseOrientation)
      } 
      else {
        changeCellsType(ship.cells, 'ship');
  
        for (const cell of ship.cells) {
          cell.isHit = true;
        }
  
        this.playerDrawer.draw(getMergedMap(this.player.map.value));
  
        await new Promise((r) => setTimeout(r, 300));
  
        for (const cell of ship.cells) {
          cell.isHit = false;
        }
      }

      this.playerDrawer.draw(getMergedMap(this.player.map.value));
    }

    function elementDrag() {
      pos1 = pos3 - event.clientX;
      pos2 = pos4 - event.clientY;
      pos3 = event.clientX;
      pos4 = event.clientY;
      // set the element's new position:
      movingOverlay.style.top = movingOverlay.offsetTop - pos2 + 'px';
      movingOverlay.style.left = movingOverlay.offsetLeft - pos1 + 'px';
    }
    
    function onMouseEnter() {
      movingOverlay.style.visibility = 'hidden'
      shipOverlayElement.style.visibility = 'visible'

      const cellRect = this.getBoundingClientRect()

      shipOverlayElement.style.top = cellRect.top - shipOffset.y * 30 + 'px';
      shipOverlayElement.style.left = cellRect.left - shipOffset.x * 30 + 'px';
    }

    function onMouseLeave() {
      movingOverlay.style.visibility = 'visible'
      shipOverlayElement.style.visibility = 'hidden'

    }

    function onMouseUp(element) {
      const y = parseInt(element.dataset.y)
      const x = parseInt(element.dataset.x)

      replaceShip(ship, y, x, shipSize, shipOrientation)
    }

    function endEvent() {
      invisibleOverlayElements.forEach((element) => {
        element.remove()
      })

      shipOverlayElement.remove();
      movingOverlay.remove()

      changeCellsType(ship.cells, 'ship')

      removeDocumentEvents()

      this.playerDrawer.draw(getMergedMap(this.player.map.value))
    }

    function addEventsToElements(elements) {
      elements.forEach((element) => {
        element.onmouseenter = onMouseEnter
        element.onmouseleave = onMouseLeave
        element.onmouseup = () => {onMouseUp(element)}
      })
    }

    function removeDocumentEvents() {
      document.body.onmousemove = undefined
      document.body.onmouseup = undefined
    }

    function getShipPositionOffset(ship, cell) {
      const offset = { x: 0, y: 0 };
      
      if (ship.cells.length === 1) {
        return offset;
      }
      
      for (const shipCell of ship.cells) {
        if (cell === shipCell) {
          break;
      }
      shipOrientation ? (offset.y += 1) : (offset.x += 1);
    }
    
    return offset;
    }

    function createOverlayShipElement(element) {
      const shipOverlay = document.createElement('div');
      
      const cellRect = element.getBoundingClientRect()
      
      shipOverlay.classList.add('cell', 'ship');
      
      shipOverlay.style.position = 'absolute';
      shipOverlay.style.opacity = '0.9';

      shipOverlay.style.width = shipOrientation === 0 ? `${30 * shipSize}px` : '30px';
      shipOverlay.style.height = shipOrientation === 1 ? `${30 * shipSize}px` : '30px';
      
      shipOverlay.style.top = cellRect.top - shipOffset.y * 30 + 'px';
      shipOverlay.style.left = cellRect.left - shipOffset.x * 30 + 'px';
      
      return shipOverlay;
    }

    function createInvisibleOverlayElements(cells) {
      const overlayElements = []
      
      for (const cell of cells) {
        const i = (cell.y + shipOffset.y) * 10 + (cell.x + shipOffset.x)
        const element = container.children[`${i}`]
        
        const elementBox = element.getBoundingClientRect()
        
        const cellOverlay = document.createElement('div');
        cellOverlay.classList.add('cell')
        
        cellOverlay.dataset.x = cell.x
        cellOverlay.dataset.y = cell.y
        
        cellOverlay.style.top = elementBox.top + 'px'
        cellOverlay.style.left = elementBox.left + 'px'
        
        cellOverlay.style.position = 'absolute'
        cellOverlay.style.backgroundColor = 'red'
        cellOverlay.style.opacity = '0.0'
        
        document.body.appendChild(cellOverlay)
        overlayElements.push(cellOverlay)
      }
      
      return overlayElements
    }

    function replaceShip(ship, y, x, size, orientation) {
      const newShip = player.createShip(y, x, size, orientation);
  
      ship.cells = newShip.cells;
  
      for (const shipCell of ship.cells) {
        player.shipPointers.delete(shipCell);
      }
  
      player.addShipPointers(newShip);
    }

    function getShipOrientation(ship) {
      if (ship.cells.length === 1) {
        return 0;
      }
      return ship.cells[1].y - ship.cells[0].y ? 1 : 0;
  }

    function changeCellsType(cells, cellType) {
      for (const cell of cells) {
        cell.type = cellType;
      }
    }
  }

  #addEventToConfig(config, cellType, eventType, event) {
    if (!('events' in config[cellType])) {
      config[cellType]['events'] = {};
    }

    config[cellType]['events'][eventType] = event;
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
