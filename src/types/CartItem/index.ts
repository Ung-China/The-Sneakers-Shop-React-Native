import {Notification} from '../../models';

export interface CartItemProps {
  onPress: () => void;
  onDelete: (id: number, variantId: number) => void;
  onIncrease: (id: number, variantId: number) => void;
  onDecrease?: (id: number, variantId: number) => void;
  isCheckout?: boolean;
  item: {
    id: number;
    brandId: number;
    name: string;
    image: string;
    price: number;
    variantName: string;
    variantId: number | null;
    quantity: number;
  };
  notifications: Notification[];
}
