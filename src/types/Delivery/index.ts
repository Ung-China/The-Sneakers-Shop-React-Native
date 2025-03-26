export interface DeliveryProps {
  onPress: () => void;
  isActive: boolean;
  item: {
    id: number;
    label: string;
    phoneNumber: string;
    streetLine1: string;
    streetLine2: string;
    province: string;
    note: string;
  };
}
