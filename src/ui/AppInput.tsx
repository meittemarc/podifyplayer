import colors from '@utils/colors';
import {FC} from 'react';
import {TextInputProps, StyleSheet, TextInput} from 'react-native';

interface Props extends TextInputProps {}

const AppInput: FC<Props> = props => {
  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.INACTIVE_CONTRAST}
      style={[styles.input, props.style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: colors.SECONDARY,
    borderRadius: 25,
    borderWidth: 2,
    color: colors.CONTRAST,
    height: 45,
    padding: 10,
  },
});

export default AppInput;
