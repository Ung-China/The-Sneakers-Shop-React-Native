export interface LogisticModalProps {
  onPressCancel: () => void;
  onPressApply: () => void;
  setActiveLogistic: (id: number) => void;
  activeLogistic: number;
  setLogistic: (name: string) => void;
}
