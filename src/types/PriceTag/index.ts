import {TextStyle, ViewStyle} from 'react-native';

export interface PriceTagProps {
  finalPrice: number;
  defaultPrice: number | null;
  defaultPriceStyle?: TextStyle;
  priceStyle?: TextStyle;
  containerStyle?: ViewStyle;
}
