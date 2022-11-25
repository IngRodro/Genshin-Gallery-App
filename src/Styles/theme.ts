export interface ITheme {
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    white: string;
    sucess: string;
    error: string;
    warning: string;
    info: string;
    transparent: string;
    nav: string;
  };
  zIndex: {
    min: number;
    one: number;
    two: number;
    three: number;
    four: number;
    five: number;
    max: number;
    nav: number;
    modal: number;
  };
  sizes: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
    desktopL: string;
    themeButton: string;
  };
}

const colorsLight = {
  primary: '#127dff',
  secondary: '#6da9ff',
  white: '#fff',
  success: '#28a745',
  error: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  background: '#f8f9fa',
  light: '#f8f9fa',
  dark: '#343a40',
  black: '#000',
  text : '#000',
  transparent: 'transparent',
  themeButton: '#ffdb4d',
  nav: '#fff',
};

const colorsDark = {
  ...colorsLight,
  primary: '#8853fe',
  secondary: '#af93ff',
  background: '#000000',
  text: '#ffffff',
  themeButton: '#232530',
  nav: '#121212',
};

const zIndex = {
  min: -1,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  max: 10,
  nav: 20,
  modal: 30,
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1920px',
  desktopL: '2560px',
};

export const themeLight = {
  colors: colorsLight,
  zIndex,
  size,
};

export const themeDark = {
  ...themeLight,
  colors: colorsDark,
  zIndex,
  size,
};
