export interface OrderItemProps {
  onPress: () => void;
  item: {
    id: number;
    orderNumber: string;
    orderDate: string;
    status: string;
    total: number;
    productCount: number;
  };
}
