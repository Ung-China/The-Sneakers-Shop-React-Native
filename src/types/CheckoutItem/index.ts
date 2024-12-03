import {Variant} from '../../models';

export interface CheckoutItemProps {
  item: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    variant?: Variant;
  };
}
