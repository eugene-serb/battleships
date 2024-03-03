'use strict';

import './style.css';

import Player from '@/game/player.js';
import Drawer from '@/game/drawer.js';
import getMergedMap from '@/game/converter';
import attack from '@/game/attack';
import computerHandler from '../../game/computerHandler';

const userConfig = {
  0: {
    class: 'cell sea',
  },
  1: {
    class: 'cell sea-hit',
  },
  2: {
    class: 'cell ship',
  },
  3: {
    class: 'cell ship-hit',
  },
};

const computerConfig = {
  0: {
    class: 'cell sea',
    handle: handle,
  },
  1: {
    class: 'cell sea-hit',
  },
  2: {
    class: 'cell ship',
  },
  3: {
    class: 'cell ship-hit',
  },
};

const userField = document.getElementById('user-field');
const rivalField = document.getElementById('rival-field');

const player = new Player();
const computer = new Player();

const userDrawer = new Drawer(userField, userConfig);
const rivalDrawer = new Drawer(rivalField, computerConfig);

function draw() {
  userDrawer.draw(getMergedMap(player.map.value));
  rivalDrawer.draw(getMergedMap(computer.map.value, true));
}

function handle(x, y) {
  console.log('x', x);
  console.log('y', y);
  attack(computer, y, x);
  computerHandler(player);
  userDrawer.draw(getMergedMap(player.map.value));
  rivalDrawer.draw(getMergedMap(computer.map.value));
  draw();
}

draw();
