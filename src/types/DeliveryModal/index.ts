export interface DeliveryModalProps {
  onPress?: () => void;
  onPressCancel?: () => void;
  onPressApply?: () => void;
  isActive?: boolean;
  activeAddress?: number;
  toggleAddress: (id: number) => void;
  handleNavigateToScreenAddress: () => void;
}
