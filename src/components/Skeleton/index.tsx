import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolate,
  Easing,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {SkeletonProps} from '../../types';
import {useTheme} from '../../hooks';
import {Screen_Dimensions} from '../../constants';

const Skeleton: React.FC<SkeletonProps> = ({
  width = Screen_Dimensions.WIDTH,
  containerStyle,
}) => {
  const {theme, colors} = useTheme();
  const shimmerTranslate = useSharedValue(-1);
  useEffect(() => {
    shimmerTranslate.value = withRepeat(
      withTiming(1, {duration: 2000, easing: Easing.linear}),
      -10,
      false,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const numericWidth = typeof width === 'number' ? width : parseFloat(width);
    const translateX = interpolate(
      shimmerTranslate.value,
      [-1, 1],
      [-Math.abs(numericWidth), Math.abs(numericWidth)],
    );

    return {
      transform: [{translateX}],
    };
  });

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {backgroundColor: colors.secondary},
      ]}>
      <Animated.View style={[StyleSheet.absoluteFill, animatedStyle]}>
        <LinearGradient
          colors={
            theme === 'dark'
              ? ['#32323200', '#505050B3', '#32323200', '#32323200']
              : ['#FFFFFF00', '#FBFBFB', '#FBFBFB', '#FFFFFF00']
          }
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default Skeleton;
