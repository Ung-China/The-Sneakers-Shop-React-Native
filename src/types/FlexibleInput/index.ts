import {KeyboardTypeOptions, StyleProp, ViewStyle} from 'react-native';

export interface FlexibleInputProps {
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  editable?: boolean;
  multiline?: boolean;
  value?: string;
  label?: string;
  error?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  textInputStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}
