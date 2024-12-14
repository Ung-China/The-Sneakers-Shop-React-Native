export interface LogisticModalProps {
  onPressCancel: () => void;
  onPressApply: () => void;
  activeLogistic: number;
  toggleLogistic: (id: number) => void;
}
