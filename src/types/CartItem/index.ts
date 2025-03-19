export interface CartItemProps {
  onPress: () => void;
  isCheckout?: boolean;
  item: {
    id: number;
    brandId: number;
    name: string;
    image: string;
    price: number;
    variantName: string;
    variantId: number;
    quantity: number;
  };
}
