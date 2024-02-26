'use strict';

const cell_names = {
  sea: 0,
  'sea-hit': 1,
  ship: 2,
  'ship-hit': 3,
};

export default function getMergedMap(map, hidden = false) {
  const data_map = [];

  for (let row of map) {
    const new_row = [];
    for (let cell of row) {
      let value = cell_names[cell.type];
      if (hidden && value == 2) {
        value = 0;
      }
      new_row.push(value);
    }
    data_map.push(new_row);
  }

  return data_map;
}
