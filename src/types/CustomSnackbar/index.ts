import {BottomSheetModal} from '@gorhom/bottom-sheet';

export interface CustomSnackbarProps {
  backgroundColor?: string;
  customSnackbarRef: React.RefObject<BottomSheetModal>;
  onCustomSnackbarChanges: (index: number) => void;
  onCloseCustomSnackbar: () => void;
  content?: React.ReactNode;
  contentContainer?: object;
}
