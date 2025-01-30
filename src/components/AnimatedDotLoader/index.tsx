import React, {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
  useAnimatedStyle,
  Easing,
  cancelAnimation,
} from 'react-native-reanimated';
import styles from './style';
import {useTheme} from '../../hooks';
import {AnimatedDotLoaderProps} from '../../types';

const AnimatedDotLoader: React.FC<AnimatedDotLoaderProps> = ({
  isLoading,
  containerStyle,
}) => {
  const dot1Y = useSharedValue(0);
  const dot2Y = useSharedValue(0);
  const dot3Y = useSharedValue(0);

  const {colors} = useTheme();

  useEffect(() => {
    if (isLoading) {
      dot1Y.value = withRepeat(
        withTiming(-10, {duration: 600, easing: Easing.inOut(Easing.ease)}),
        -1,
        true,
      );

      const dot2Timeout = setTimeout(() => {
        dot2Y.value = withRepeat(
          withTiming(-10, {duration: 600, easing: Easing.inOut(Easing.ease)}),
          -1,
          true,
        );
      }, 200);

      const dot3Timeout = setTimeout(() => {
        dot3Y.value = withRepeat(
          withTiming(-10, {duration: 600, easing: Easing.inOut(Easing.ease)}),
          -1,
          true,
        );
      }, 400);

      return () => {
        cancelAnimation(dot1Y);
        cancelAnimation(dot2Y);
        cancelAnimation(dot3Y);
        clearTimeout(dot2Timeout);
        clearTimeout(dot3Timeout);
      };
    }
  }, [isLoading]);

  const dot1Style = useAnimatedStyle(() => ({
    transform: [{translateY: dot1Y.value}],
  }));
  const dot2Style = useAnimatedStyle(() => ({
    transform: [{translateY: dot2Y.value}],
  }));
  const dot3Style = useAnimatedStyle(() => ({
    transform: [{translateY: dot3Y.value}],
  }));

  if (!isLoading) {
    return null;
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <Animated.View
        style={[styles.dot, dot1Style, {backgroundColor: colors.text}]}
      />
      <Animated.View
        style={[styles.dot, dot2Style, {backgroundColor: colors.text}]}
      />
      <Animated.View
        style={[styles.dot, dot3Style, {backgroundColor: colors.text}]}
      />
    </View>
  );
};

export default AnimatedDotLoader;
