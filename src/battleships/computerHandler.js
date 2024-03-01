'use strict';
import attack from '../game/attack';

function computerHandler(rival) {
  let attackResult = true;
  while (attackResult) {
    let cellForAttack = getRandomPoint(rival);
    attackResult = attack(rival, cellForAttack.y, cellForAttack.x);
  }
  return false;
}

function getRandomPoint(rival) {
  const points = rival.getUntouchedCells();
  const point = points[parseInt(Math.random() * points.length)];
  return point;
}

export default computerHandler;
