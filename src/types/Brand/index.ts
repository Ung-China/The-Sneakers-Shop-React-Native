export interface BrandProps {
  onPress: (id?: number) => void;
  item: {
    id: number;
    name: string;
    image: string;
  };
}
