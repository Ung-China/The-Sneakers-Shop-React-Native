import {StyleProp, ViewStyle} from 'react-native';

export interface CustomSnackbarProps {
  visible: boolean;
  contentContainer?: StyleProp<ViewStyle>;
  text?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
}
