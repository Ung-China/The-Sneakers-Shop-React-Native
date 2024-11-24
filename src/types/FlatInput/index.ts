import {KeyboardTypeOptions, StyleProp, ViewStyle} from 'react-native';

export interface FlatInputProps {
  onActionButtonPress?: () => void;
  editable?: boolean;
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  textInputStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  prefixIconColor?: string;
  suffixIconColor?: string;
  prefixIconWidth?: string;
  prefixIconHeight?: string;
  suffixIconWidth?: string;
  suffixIconHeight?: string;
}
