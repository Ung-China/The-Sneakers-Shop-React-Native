import {Appearance} from 'react-native';
import DarkTheme from './darkTheme';
import LightTheme from './lightTheme';

export type Themes = {
  primary: string;
  primaryReversed: string;
  secondary: string;
  secondaryReversed: string;
  text: string;
  textReversed: string;
  icon: string;
  white: string;
  black: string;
  lightGrey: string;
  grey: string;
};

const isDark = Appearance.getColorScheme() === 'dark';
export const colors: Themes = isDark ? DarkTheme : LightTheme;
