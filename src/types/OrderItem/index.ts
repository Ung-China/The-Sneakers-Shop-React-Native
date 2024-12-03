export interface OrderItemProps {
  onPress: () => void;
  item: {
    id: number;
    orderNumber: string;
    orderDate: string;
    status: string;
    totalAmount: number;
  };
}
