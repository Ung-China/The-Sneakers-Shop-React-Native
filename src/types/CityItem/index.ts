export interface CityItemProps {
  onPress: () => void;
  isActive: boolean;
  item: {
    id: number;
    name: string;
  };
}
