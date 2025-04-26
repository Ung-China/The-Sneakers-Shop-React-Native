export interface CheckoutItemProps {
  item: {
    id: number;
    name: string;
    orderId: number;
    productId: number;
    brandId: number;
    quantity: number;
    size: string;
    price: number;
    discount: number;
    discountType: string;
    imageUrl: string;
  };
}
