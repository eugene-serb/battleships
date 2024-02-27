'use strict';

const cellNames = {
  sea: 0,
  'sea-hit': 1,
  ship: 2,
  'ship-hit': 3,
};

function getMergedMap(map, hidden = false) {
  const dataMap = [];

  for (let row of map) {
    const newRow = [];

    for (let cell of row) {
      let value = cellNames[cell.type];

      if (hidden && value == 2) {
        value = 0;
      }

      newRow.push(value);
    }

    dataMap.push(newRow);
  }

  return dataMap;
}

export default getMergedMap;
