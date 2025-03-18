import {TextStyle, ViewStyle} from 'react-native';

export interface PriceTagProps {
  finalPrice: number;
  defaultPrice: number;
  defaultPriceStyle?: TextStyle;
  priceStyle?: TextStyle;
  containerStyle?: ViewStyle;
}
