import { Theme } from '@emotion/react';

const colors = {
  grey: '#9E9E9E',
  darkGrey: '#757575',
  lightGrey: '#BDBDBD',
};

const theme: Theme = {
  colors,
};

export type ColorsTypes = typeof colors;
export default theme;
