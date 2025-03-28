import {StyleProp, ViewStyle} from 'react-native';
import {Notification, Variant} from '../../models';

export interface ProductItemProps {
  onPress: (id?: number, brandId?: number) => void;
  wrapperStyle?: StyleProp<ViewStyle>;
  item: {
    id: number;
    name: string;
    price: number;
    rating: string;
    image: string;
    description?: string;
    images?: string[];
    brandId: number;
    variants?: Variant[];
  };
  notifications: Notification[];
  showSnackbar: (type: 'success' | 'error' | 'info', message: string) => void;
}
