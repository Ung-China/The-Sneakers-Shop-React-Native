import {StyleProp, ViewStyle} from 'react-native';

export interface ProductItemProps {
  onPress: (id?: number) => void;
  wrapperStyle?: StyleProp<ViewStyle>;
  item: {
    id: number;
    name: string;
    price: number;
    rating: string;
    image: string;
    isFavorite: boolean;
    galleries: string[];
    variants: string | [];
    promotion: number;
  };
}
