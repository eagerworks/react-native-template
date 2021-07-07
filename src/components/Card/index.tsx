import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

import styles from './styles';

interface CardProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ style, children }) => (
  <View style={[style, styles.card]}>{children}</View>
);

export default Card;
