import {StyleProp, ViewStyle} from 'react-native';

export interface TouchableProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress?: () => void;
}
