export interface locationItemProps {
  onPress: (latitude: number, longitude: number, address: string) => void;
  item: {
    name: string;
    latitude: number;
    longitude: number;
    image: string;
    open: string;
    close: string;
    address: string;
  };
}
