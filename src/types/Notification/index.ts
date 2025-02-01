export interface NotificationProps {
  onPress: () => void;
  item: {
    id: number;
    title: string;
    description: string;
    images: string[];
  };
}
