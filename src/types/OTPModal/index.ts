export interface OTPModalProps {
  isVisible: boolean;
  onClose: () => void;
  onPress: () => void;
  animationType?: 'none' | 'slide' | 'fade';
}
