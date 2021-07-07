import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import textStyles from '@styles/text';
import { GRAY_2, GRAY_5 } from '@constants/colors';

interface TextInputStyles {
  container: ViewStyle;
  textInputContainer: ViewStyle;
  inputText: TextStyle;
  inputFocused: ViewStyle;
  inputBlured: ViewStyle;
}

const styles = StyleSheet.create<TextInputStyles>({
  container: {},
  textInputContainer: {
    borderWidth: 3,
  },
  inputText: {
    padding: 5,
    ...textStyles.tertiary,
  },
  inputFocused: {
    borderColor: GRAY_5,
  },
  inputBlured: {
    borderColor: GRAY_2,
  },
});

export default styles;
