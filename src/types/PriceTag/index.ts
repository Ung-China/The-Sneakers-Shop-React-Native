import {TextStyle, ViewStyle} from 'react-native';

export interface PriceTagProps {
  price: string;
  promotion: string;
  defaultPriceStyle?: TextStyle;
  priceStyle?: TextStyle;
  containerStyle?: ViewStyle;
}
