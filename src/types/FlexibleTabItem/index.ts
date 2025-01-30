export interface FlexibleTabItemProps {
  onPress: () => void;
  activeId: number;
  item: {
    id: number;
    name: string;
    image: string;
  };
}
