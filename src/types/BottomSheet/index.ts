import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {StyleProp, ViewStyle} from 'react-native';

export interface BottomSheetProps {
  content: React.ReactNode;
  onSheetChanges?: (index: number) => void;
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
  handleSheetDismiss: () => void;
  snapPoints?: Array<string | number>;
  enableDynamicSizing?: boolean;
  contentContainer?: StyleProp<ViewStyle>;
}
