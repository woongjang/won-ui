export type Colors =
  | 'black'
  | 'red'
  | 'orange'
  | 'magenta'
  | 'yellow'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'cyan'
  | 'teal'
  | 'green';

export type ColorScale = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

export type WonColor = {
  [scale in ColorScale]: string;
};

export type WonTheme = {
  [color in Colors]: WonColor
};
