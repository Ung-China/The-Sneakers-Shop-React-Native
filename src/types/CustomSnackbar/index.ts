import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {StyleProp, ViewStyle} from 'react-native';

export interface CustomSnackbarProps {
  text?: string;
  backgroundColor?: string;
  customSnackbarRef: React.RefObject<BottomSheetModal>;
  contentContainer?: StyleProp<ViewStyle>;
}
