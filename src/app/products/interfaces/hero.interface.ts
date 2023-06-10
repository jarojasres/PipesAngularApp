
export enum Color {
  red,
  yellow,
  black,
  blue,
  green
};

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
};
