export interface DeliveryProps {
  onPress: () => void;
  isActive: boolean;
  item: {
    id: number;
    label: string[];
    streetLine1: string;
    streetLine2: string;
    phoneNumber: string;
  };
}
