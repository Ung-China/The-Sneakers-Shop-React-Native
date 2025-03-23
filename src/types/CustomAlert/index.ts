export interface CustomAlertProps {
  isVisible: boolean;
  title?: string;
  description?: string;
  onCloseTitle?: string;
  onPressTitle?: string;
  animationType?: 'none' | 'slide' | 'fade';
  onClose?: () => void;
  onPress?: () => void;
  singleButtonMode?: boolean;
}
