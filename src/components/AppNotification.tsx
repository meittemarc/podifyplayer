import colors from '@utils/colors';
import {FC, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {
  getNotificationState,
  upldateNotification,
} from 'src/store/notification';

interface Props {}

const AppNotification: FC<Props> = props => {
  const {message, type} = useSelector(getNotificationState);
  const height = useSharedValue(0);

  const dispatch = useDispatch();

  const heightStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  let backgroundColor = colors.ERROR;
  let textColor = colors.CONTRAST;

  switch (type) {
    case 'success':
      backgroundColor = colors.SUCCESS;
      textColor = colors.PRIMARY;
      break;
  }

  useEffect(() => {
    let timeoutId = 0;
    const performAnimation = () => {
      height.value = withTiming(45, {
        duration: 150,
      });

      timeoutId = setTimeout(() => {
        height.value = withTiming(0, {
          duration: 150,
        });

        dispatch(upldateNotification({message: '', type}));
      }, 3000);
    };

    if (message) performAnimation();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, dispatch, height, type]);

  return (
    <Animated.View style={[styles.container, {backgroundColor}, heightStyle]}>
      <Text style={[styles.message, {color: textColor}]}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  message: {
    alignItems: 'center',
    fontSize: 18,
  },
});

export default AppNotification;
