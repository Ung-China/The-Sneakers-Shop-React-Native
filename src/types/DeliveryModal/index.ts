export interface DeliveryModalProps {
  onPress?: () => void;
  onPressCancel?: () => void;
  onPressApply?: () => void;
  isActive?: boolean;
  activeAddress?: number;
  setActiveAddress: (id: number) => void;

  // toggleAddress: (id: number) => void;
  setAddress: string;
  handleNavigateToScreenAddress: () => void;
}
