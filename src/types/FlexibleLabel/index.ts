import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface FlexibleLabelProps {
  label: string;
  value: string | number;
  labelStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
  containerStyle?: ViewStyle;
  showDollar?: boolean;
}
