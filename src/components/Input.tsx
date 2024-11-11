import { StyleSheet, TextInput, ViewProps, View } from 'react-native';
import { globalColors } from '../../styles/Global';
import React, { FC } from 'react';

type InputProps = {
  value?: string;
  placeholder?: string;
  outerStyle?: ViewProps['style'];
  rightButton?: React.ReactNode;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
};

const Input: FC<InputProps> = ({
  placeholder,
  outerStyle,
  rightButton,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  return (
    <View style={[styles.inputBlock, outerStyle]}>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={globalColors.darkGray}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {rightButton}
    </View>
  );
};

const styles = StyleSheet.create({
  inputBlock: {
    width: '100%',
    height: 50,
    backgroundColor: globalColors.light,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: globalColors.gray,
    justifyContent: 'space-between',
  },
});

export default Input;
