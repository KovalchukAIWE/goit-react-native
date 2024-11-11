import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalColors } from '../../styles/Global';

interface ShowPasswordButtonProps {
  togglePasswordVisibility: () => void;
  isShowPassword: boolean;
}

const ShowPasswordButton: React.FC<ShowPasswordButtonProps> = ({
  togglePasswordVisibility,
  isShowPassword,
}) => {
  return (
    <TouchableOpacity onPress={togglePasswordVisibility}>
      <Text style={stylesBTN.showPassword}>
        {isShowPassword ? 'Приховати' : 'Показати'}
      </Text>
    </TouchableOpacity>
  );
};

const stylesBTN = StyleSheet.create({
  showPassword: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    color: globalColors.secondary,
  },
});

export default ShowPasswordButton;
