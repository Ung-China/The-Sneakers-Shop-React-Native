import {Variant} from '../../models';

export interface CartItemProps {
  onPress: () => void;
  item: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    variant?: Variant;
  };
}
