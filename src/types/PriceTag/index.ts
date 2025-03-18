import {TextStyle, ViewStyle} from 'react-native';

export interface PriceTagProps {
  price: number;
  promotion: string;
  defaultPriceStyle?: TextStyle;
  priceStyle?: TextStyle;
  containerStyle?: ViewStyle;
}
