import {BottomSheetModal} from '@gorhom/bottom-sheet';

export interface BottomSheetProps {
  content: React.ReactNode;
  onSheetChanges?: (index: number) => void;
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
  handleLogisticSheetDismiss: () => void;
  snapPoints?: Array<string | number>;
  enableDynamicSizing?: boolean;
}
