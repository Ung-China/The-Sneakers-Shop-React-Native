import {TextStyle, ViewStyle} from 'react-native';

export interface PriceTagProps {
  price: number;
  promotion: number;
  defaultPriceStyle?: TextStyle;
  priceStyle?: TextStyle;
  containerStyle?: ViewStyle;
}
