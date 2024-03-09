'use strict';

import { MAP_MERGE_CONFIG } from '@/game/constants/common';

export function getMergedMap(map, hidden = false) {
  const dataMap = [];

  for (let row of map) {
    const newRow = [];

    for (let cell of row) {
      let value = MAP_MERGE_CONFIG[cell.type][Number(cell.isHit)];

      if (hidden && value === 2) {
        value = 0;
      }

      newRow.push(value);
    }

    dataMap.push(newRow);
  }

  return dataMap;
}
