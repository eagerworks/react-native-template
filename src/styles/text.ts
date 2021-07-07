import { StyleSheet, TextStyle } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import { BLACK, ERROR_COLOR, WHITE } from '@constants/colors';

interface TextStyles {
  primary: TextStyle;
  secondary: TextStyle;
  tertiary: TextStyle;
  title: TextStyle;
  subtitle: TextStyle;
  error: TextStyle;
  bold: TextStyle;
  medium: TextStyle;
  light: TextStyle;
  uppercase: TextStyle;
  downcase: TextStyle;
  capitalized: TextStyle;
  white: TextStyle;
  black: TextStyle;
}

const styles = StyleSheet.create<TextStyles>({
  primary: {
    fontSize: RFValue(24),
  },
  secondary: {
    fontSize: RFValue(20),
  },
  tertiary: {
    fontSize: RFValue(16),
  },
  title: {
    fontSize: RFValue(28),
    fontWeight: '900',
  },
  subtitle: {
    fontSize: RFValue(26),
    fontWeight: '700',
  },
  error: {
    color: ERROR_COLOR,
  },
  bold: {
    fontWeight: '900',
  },
  medium: {
    fontWeight: '700',
  },
  light: {
    fontWeight: '400',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  downcase: {
    textTransform: 'lowercase',
  },
  capitalized: {
    textTransform: 'capitalize',
  },
  white: {
    color: WHITE,
  },
  black: {
    color: BLACK,
  },
});

export default styles;
