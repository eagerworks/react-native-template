import { BLACK, ERROR_COLOR, PRIMARY, SECONDARY } from '@constants/colors';
import { StyleSheet, ViewStyle } from 'react-native';

interface TextButtonStyle {
  primary: ViewStyle;
  secondary: ViewStyle;
  tertiary: ViewStyle;
  buttonContainer: ViewStyle;
  buttonOutlineBlack: ViewStyle;
  buttonOutlineWhite: ViewStyle;
  buttonFillBlack: ViewStyle;
  buttonFillWhite: ViewStyle;
  buttonDisabled: ViewStyle;
  small: ViewStyle;
}

export default StyleSheet.create<TextButtonStyle>({
  primary: {
    backgroundColor: PRIMARY,
    color: BLACK,
  },
  secondary: {
    backgroundColor: SECONDARY,
    color: BLACK,
  },
  tertiary: {
    backgroundColor: ERROR_COLOR,
    color: BLACK,
  },
  buttonContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 3,
    padding: 10,
  },
  buttonFillBlack: {},
  buttonFillWhite: {},
  buttonOutlineBlack: {
    borderWidth: 1,
  },
  buttonOutlineWhite: {
    borderWidth: 1,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  small: {
    width: 200,
  },
});
