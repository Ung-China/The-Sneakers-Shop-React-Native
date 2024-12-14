export interface OptionItemProps {
  onPress: () => void;
  title: string;
  description: string;
  prefixIcon?: React.ReactNode;
  isActive?: boolean;
}
