// @flow
export const COLOR = {
  BACKGROUND: {
    SMOKE: '#f7f8f9',
    EMPTY: '#fff',
    NAVBAR: '#333',
    LIST: {
      DEFAULT: '#e4e8ec',
      FOCUSED: '#dae8f6',
      ACTIVE: '#fff',
    },
  },
  BORDER: '#ccc',
  BORDER_BOLD: '#000',
  OVERLAY: 'rgba(0,0,0,0.6)',
  TEXT: {
    DEFAULT: '#333',
    FOCUSED: '#ccc',
    NAVBAR: '#fff',
  },
};

export const SIZE = {
  MARGIN: {
    PAGE: '20px',
    LIST: '10px',
  },
  PADDING: {
    LIST: '5px',
  },
  WIDTH: {
    LEFT_COLUMN: '450px',
    LIST_IMAGE: '100px',
  },
  TEXT: {
    NAVBAR: '2.5rem',
    MENU_ICON: '1.5rem',
  },
};

export const STYLE = {
  SHADOW: `0 1px 2px ${COLOR.BORDER}`,
  SHADOW_BOLD: `0 1px 2px ${COLOR.BORDER_BOLD}`,
  OPACITY: 1,
  OPACITY_BOLD: 0.25,
  RADIUS: '2px',
};
