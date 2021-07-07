import React, { useState } from 'react';
import {
  StyleProp,
  ViewStyle,
  TextInput as RNTextInput,
  TextInputIOSProps,
  TextInputAndroidProps,
  TextStyle,
  View,
  KeyboardTypeOptions,
} from 'react-native';

import Text from '@components/Text';

import layoutStyles from '@styles/layout';
import textStyles from '@styles/text';
import styles from './styles';

interface TextInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  cleanError?: () => void;
  placeholder?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: KeyboardTypeOptions;
  containerStyles?: StyleProp<ViewStyle>;
  customInputStyles?: StyleProp<TextStyle>;
  secure?: boolean;
  error?: string;
  disabled?: boolean;
  iosProps?: TextInputIOSProps;
  androidProps?: TextInputAndroidProps;
  testID?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label = '',
  value,
  onChange,
  cleanError = () => {},
  placeholder = '',
  autoCapitalize = 'none',
  keyboardType = 'default',
  containerStyles = {},
  customInputStyles = {},
  secure = false,
  error = '',
  disabled = false,
  iosProps = {},
  androidProps = {},
  testID = '',
}) => {
  const [focused, setFocus] = useState(false);

  const handleOnFocus = () => setFocus(true);
  const handleOnBlur = () => setFocus(false);

  const handleOnChange = (text: string) => {
    onChange(text);

    cleanError && cleanError();
  };

  const selectedStyle = focused ? styles.inputFocused : styles.inputBlured;

  return (
    <View style={[styles.container, layoutStyles.p5, containerStyles]}>
      {label !== '' && <Text>{label}</Text>}
      <View style={[styles.textInputContainer, selectedStyle]}>
        <RNTextInput
          style={[styles.inputText, customInputStyles]}
          placeholder={placeholder}
          value={value}
          onChangeText={handleOnChange}
          secureTextEntry={secure}
          autoCapitalize={autoCapitalize}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          testID={testID}
          editable={!disabled}
          keyboardType={keyboardType}
          {...androidProps}
          {...iosProps}
        />
      </View>
      {error !== '' && <Text style={[textStyles.error, textStyles.tertiary]}>{error}</Text>}
    </View>
  );
};

export default TextInput;
