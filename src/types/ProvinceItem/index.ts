export interface ProvinceItemProps {
  onPress: () => void;
  isActive: boolean;
  item: {
    id: number;
    name: string;
  };
}
