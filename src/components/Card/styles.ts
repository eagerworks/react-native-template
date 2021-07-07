import { StyleSheet, ViewStyle } from 'react-native';

import layoutStyles from '@styles/layout';

import { WHITE } from '@constants/colors';

interface CardStyles {
  card: ViewStyle;
}

const styles = StyleSheet.create<CardStyles>({
  card: {
    borderRadius: 15,
    backgroundColor: WHITE,
    ...layoutStyles.p20,
    ...layoutStyles.boxShadow,
  },
});

export default styles;
