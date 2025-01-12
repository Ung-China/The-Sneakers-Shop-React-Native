export interface OTPModalProps {
  isVisible: boolean;
  onClose: () => void;
  onPress: () => void;
  animationType?: 'none' | 'slide' | 'fade';
  phoneNumber: string;
  errorOTP: string;
  setOTP: (text: string) => void;
}
