export interface BrandProps {
  onPress?: () => void;
  item: {
    id: number;
    name: string;
    image: string;
  };
}
