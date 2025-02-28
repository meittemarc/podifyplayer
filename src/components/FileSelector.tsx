import colors from '@utils/colors';
import {FC, ReactNode} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  StyleProp,
  ViewStyle,
  Alert,
} from 'react-native';
import * as DocumentPicker from '@react-native-documents/picker';

interface Props {
  icon?: ReactNode;
  btnTitle?: string;
  style?: StyleProp<ViewStyle>;
  onSelect(file: DocumentPicker.DocumentPickerResponse): void;
  options: DocumentPicker.DocumentPickerOptions;
}

const FileSelector: FC<Props> = ({
  icon,
  onSelect,
  options,
  style,
  btnTitle,
}) => {
  const handleDocumentSelect = async () => {
    try {
      console.log('Opening document picker...');
      const result = await DocumentPicker.pick(options); // Ensure the correct method is used

      if (result && Array.isArray(result) && result.length > 0) {
        console.log('File selected:', result[0]);
        onSelect(result[0]);
      } else {
        console.log('No file selected');
      }
    } catch (error: any) {
      if (error?.code === 'DOCUMENT_PICKER_CANCELED') {
        console.log('User canceled file picker');
      } else {
        console.info('DocumentPicker Error:', error);
        // console.error('DocumentPicker Error:', error);
        // Alert.alert('Error', 'Failed to open file picker');
      }
    }
  };

  return (
    <Pressable
      onPress={handleDocumentSelect}
      style={[styles.btnContainer, style]}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.btnTitle}>{btnTitle}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitle: {
    color: colors.CONTRAST,
    marginTop: 5,
  },
  iconContainer: {
    alignItems: 'center',
    aspectRatio: 1,
    borderColor: colors.SECONDARY,
    borderRadius: 7,
    borderWidth: 2,
    height: 70,
    justifyContent: 'center',
  },
});

export default FileSelector;
