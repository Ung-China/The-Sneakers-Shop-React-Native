import {ReactNode} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface SectionProps {
  children?: ReactNode;
  title?: string;
  actionButton?: ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  price?: number | string;
  priceAfterDicount?: string | number;
  priceStyle?: StyleProp<TextStyle>;
  priceAfterDicountStyle?: StyleProp<TextStyle>;
}
