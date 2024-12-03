import {StyleProp, ViewStyle} from 'react-native';

export interface VariantProps {
  onPress: () => void;
  index?: number;
  containerStyle: StyleProp<ViewStyle>;
  isActive: boolean;
  item: {
    id: number;
    size: string;
    price: number;
  };
}
