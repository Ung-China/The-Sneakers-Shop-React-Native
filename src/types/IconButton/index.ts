import {StyleProp, ViewStyle} from 'react-native';

export interface IconButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  icon?: React.ReactNode;
}
