import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {StyleProp, ViewStyle} from 'react-native';

export interface CustomSnackbarProps {
  text?: string;
  backgroundColor?: string;
  customSnackbarRef: React.RefObject<BottomSheetModal>;
  onCustomSnackbarChanges: (index: number) => void;
  onCloseCustomSnackbar: () => void;
  content?: React.ReactNode;
  contentContainer?: StyleProp<ViewStyle>;
}
