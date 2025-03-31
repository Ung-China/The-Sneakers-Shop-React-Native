export interface LogisticModalProps {
  onPressCancel: () => void;
  onPressApply: () => void;
  setActiveLogistic: (id: number) => void;
  activeLogistic: null;
  setLogistic: (name: string) => void;
}
