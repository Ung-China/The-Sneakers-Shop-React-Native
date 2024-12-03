import {StyleProp, ViewStyle} from 'react-native';

export interface ProductItemProps {
  onPress: () => void;
  wrapperStyle?: StyleProp<ViewStyle>;
  item: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    isFavorite: boolean;
    galleries: string[];
    variants: string | [];
    promotion: number;
  };
}
