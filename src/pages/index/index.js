'use strict';

import './style.css';

import Player from '@/battleships/Player.js';
import Drawer from '@/battleships/drawer.js';
import getMergedMap from '@/battleships/converter';

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

function handle(x, y) {
  console.log('x', x);
  console.log('y', y);
}

const userField = document.getElementById('user-field');
const rivalField = document.getElementById('rival-field');

const player = new Player();
const computer = new Player();

const userDrawer = new Drawer(userField, userConfig);
const rivalDrawer = new Drawer(rivalField, computerConfig);

console.log('player', getMergedMap(player.map.value));
console.log('computer', getMergedMap(computer.map.value));

userDrawer.draw(getMergedMap(player.map.value));
rivalDrawer.draw(getMergedMap(computer.map.value));
