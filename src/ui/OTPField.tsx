import colors from '@utils/colors';
import {FC, forwardRef} from 'react';
import {View, StyleSheet, TextInput, TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  ref: any;
}

const OTPField = forwardRef<TextInput, Props>((props, ref) => {
  return (
    <TextInput
      {...props}
      ref={ref}
      style={[styles.input, props.style]}
      placeholderTextColor={colors.INACTIVE_CONTRAST}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    borderColor: colors.SECONDARY,
    borderRadius: 25,
    borderWidth: 2,
    color: colors.CONTRAST,
    fontSize: 18,
    fontWeight: 'bold',
    height: 50,
    lineHeight: 0,
    textAlign: 'center',
    width: 50,
  },
});

export default OTPField;
