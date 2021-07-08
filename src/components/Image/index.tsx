import React, { useState } from 'react';

import FastImage, { Source, ImageStyle } from 'react-native-fast-image';

import LoadingIndicator from '@components/LoadingIndicator';

import styles from './styles';

interface ImageProps {
  style?: ImageStyle;
  source: Source;
  resizeMode?: 'contain' | 'center' | 'stretch';
  onError?: () => void;
}

const Image: React.FC<ImageProps> = ({ style, source, resizeMode, onError }) => {
  const [loading, setLoading] = useState(true);

  const imageStyles = [styles.imageContainer];
  if (style) {
    imageStyles.push(style);
  }

  return (
    <FastImage
      resizeMode={resizeMode}
      style={imageStyles}
      source={source}
      onLoadEnd={() => setLoading(false)}
      onError={onError}
    >
      {loading && <LoadingIndicator />}
    </FastImage>
  );
};

export default Image;
