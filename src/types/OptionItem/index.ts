import {StyleProp, ViewStyle} from 'react-native';

export interface OptionItemProps {
  onPress: () => void;
  title: string;
  description: string;
  prefixIcon?: React.ReactNode;
  isActive?: boolean;
  contentContainer?: StyleProp<ViewStyle>;
}
