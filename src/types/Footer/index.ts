import {StyleProp, ViewStyle} from 'react-native';

export interface FooterProps {
  children: React.ReactNode;
  safeAreaStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
