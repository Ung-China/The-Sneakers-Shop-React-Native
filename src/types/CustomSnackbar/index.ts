import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {StyleProp, ViewStyle, TextStyle} from 'react-native';

export interface CustomSnackbarProps {
  customSnackbarRef: React.RefObject<BottomSheetModal>;
  contentContainer?: StyleProp<ViewStyle>;
  text?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
}
