import {Address} from '../../models';

export interface DeliveryModalProps {
  onPress?: () => void;
  onPressCancel?: () => void;
  onPressApply?: () => void;
  isActive?: boolean;
  activeAddress: null;
  setActiveAddress: (id: number) => void;
  setAddress: (address: Address) => void;
  handleNavigateToScreenAddress: () => void;
}
