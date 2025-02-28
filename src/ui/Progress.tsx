import colors from '@utils/colors';
import {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {
  progress: number;
}

const Progress: FC<Props> = ({progress}) => {
  return (
    <>
      <Text style={styles.title}>{`${progress}%`}</Text>
      <View style={[styles.progressBar, {width: `${progress}%`}]} />
    </>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    backgroundColor: colors.CONTRAST,
    borderRadius: 5,
    height: 10,
  },
  title: {
    alignSelf: 'flex-end',
    color: colors.CONTRAST,
    paddingVertical: 2,
  },
});

export default Progress;
