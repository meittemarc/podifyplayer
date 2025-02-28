import colors from '@utils/colors';
import {JSX, useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Pressable,
  Text,
  ScrollView,
} from 'react-native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props<T> {
  data: T[];
  visible?: boolean;
  title?: string;
  renderItem(item: T): JSX.Element;
  onSelect(item: T, index: number): void;
  onRequestClose?(): void;
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const CategorySelector = <T extends any>({
  data,
  title,
  visible = false,
  renderItem,
  onSelect,
  onRequestClose,
}: Props<T>) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (item: T, index: number) => {
    setSelectedIndex(index);
    onSelect(item, index);
    onRequestClose && onRequestClose();
  };

  return (
    <Modal onRequestClose={onRequestClose} visible={visible} transparent>
      <View style={styles.modalContainer}>
        <Pressable onPress={onRequestClose} style={styles.backdrop} />
        <View style={styles.modal}>
          <Text style={styles.title}>{title}</Text>

          <ScrollView>
            {data.map((item, index) => {
              return (
                <Pressable
                  onPress={() => handleSelect(item, index)}
                  key={index}
                  style={styles.selectorContainer}>
                  {selectedIndex === index ? (
                    <MaterialComIcon
                      name="radiobox-marked"
                      color={colors.SECONDARY}
                    />
                  ) : (
                    <MaterialComIcon
                      name="radiobox-blank"
                      color={colors.SECONDARY}
                    />
                  )}
                  {renderItem(item)}
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.INACTIVE_CONTRAST,
    zIndex: -1,
  },
  modal: {
    backgroundColor: colors.CONTRAST,
    borderRadius: 10,
    maxHeight: '50%',
    padding: 10,
    width: '90%',
  },
  // eslint-disable-next-line react-native/no-color-literals
  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'transparet',
    flex: 1,
    justifyContent: 'center',
    zIndex: 1,
  },
  selectorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: colors.PRIMARY,
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 10,
  },
});

export default CategorySelector;
