export interface locationItemProps {
  onPress: (latitude: number, longitude: number, shopLocation: string) => void;
  item: {
    name: string;
    latitude: number;
    longitude: number;
    image: string;
    open: string;
    close: string;
    shopLocation: string;
  };
}
