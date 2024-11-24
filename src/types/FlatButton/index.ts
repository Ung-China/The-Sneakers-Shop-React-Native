import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ReactNode} from 'react';

export interface FlatButtonProps {
  prefixIcon?: ReactNode;
  label: string;
  sufixIcon?: ReactNode;
  wrapperStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}
