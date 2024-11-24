import {StyleProp, ViewStyle} from 'react-native';
import React from 'react';

export interface HeaderProps {
  children?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
