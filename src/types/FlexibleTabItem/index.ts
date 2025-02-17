export interface FlexibleTabItemProps {
  onPress: () => void;
  activeId: number | null;
  item: {
    id: number;
    name: string;
    image: string;
  };
}
