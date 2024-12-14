export interface AddressLabelItemProps {
  onPress: () => void;
  isActive: boolean;
  item: {
    id: number;
    name: string;
  };
}
