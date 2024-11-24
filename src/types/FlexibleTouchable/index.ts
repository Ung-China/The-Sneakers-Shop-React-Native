import React from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

export interface FlexibleTouchableProps {
  onPress: () => void;
  label?: string;
  prefixIcon?: React.FC<SvgProps>;
  suffixIcon?: React.FC<SvgProps>;
  prefixIconColor?: string;
  suffixIconColor?: string;
  prefixIconWidth?: string;
  prefixIconHeight?: string;
  suffixIconWidth?: string;
  suffixIconHeight?: string;
  wrapperStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  leadingContainerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}
