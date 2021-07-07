import React from 'react';
import { StyleProp, Text as RNText, TextStyle } from 'react-native';

import styles from './styles';

interface TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  restProps?: any;
}

const Text = ({ children = '', style, ...restProps }: TextProps) => {
  return (
    <RNText style={[styles.base, style]} {...restProps}>
      {children}
    </RNText>
  );
};

export default Text;
