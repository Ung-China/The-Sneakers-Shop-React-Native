import {StyleProp, ViewStyle} from 'react-native';

export interface FlexibleInputProps {
  onPress?: () => void;
  onPressRightAction?: () => void;
  onChangeText?: (text: string) => void;
  autoFocus?: boolean;
  editable?: boolean;
  multiline?: boolean;
  value?: string;
  label?: string;
  error?: string;
  placeholder?: string;
  keyboardType?: any;
  textInputStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  secureTextEntry?: boolean;
}
