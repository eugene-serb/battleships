'use strict';

const cellNames = {
  sea: {
    0: 0,
    1: 1,
  },
  ship: {
    0: 2,
    1: 3,
  },
};

function getMergedMap(map, hidden = false) {
  const dataMap = [];

  for (let row of map) {
    const newRow = [];

    for (let cell of row) {
      let value = cellNames[cell.type][Number(cell.isHit)];

      if (hidden && value === 2) {
        value = 0;
      }

      newRow.push(value);
    }

    dataMap.push(newRow);
  }

  return dataMap;
}

export default getMergedMap;
