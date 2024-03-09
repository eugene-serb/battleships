export const USER_FIELD_ID_SELECTOR = 'user-field';
export const RIVAL_FIELD_ID_SELECTOR = 'rival-field';
export const RESTART_BUTTON_ID_SELECTOR = 'restart';
export const TEXT_BANNER_ID_SELECTOR = 'win-text';

export const PLAYER_WIN_TEXT = 'You won!';
export const RIVAL_WIN_TEXT = 'You lose!';

export const MAP_MERGE_CONFIG = {
  sea: {
    0: 0,
    1: 1,
  },
  ship: {
    0: 2,
    1: 3,
  },
};

export const DRAWER_CONFIG = {
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
