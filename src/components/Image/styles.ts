import { StyleSheet } from 'react-native';

import { ImageStyle } from 'react-native-fast-image';

interface ImageStyles {
  loadingIndicatorContainer: ImageStyle;
  imageContainer: ImageStyle;
}

const styles = StyleSheet.create<ImageStyles>({
  loadingIndicatorContainer: {
    alignSelf: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

export default styles;
