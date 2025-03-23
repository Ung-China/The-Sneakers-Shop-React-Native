import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useCallback, useRef} from 'react';

const useCustomSnackbar = () => {
  const customSnackbarRef = useRef<BottomSheetModal>(null);

  const toggleCustomSnackbar = useCallback(() => {
    customSnackbarRef.current?.present();
  }, []);

  const onCustomSnackbarChanges = useCallback((index: number) => {
    console.log('Custom Snackbar changed to index', index);
  }, []);

  const onCloseCustomSnackbar = useCallback(() => {
    customSnackbarRef.current?.close();
  }, []);

  return {
    customSnackbarRef,
    toggleCustomSnackbar,
    onCustomSnackbarChanges,
    onCloseCustomSnackbar,
  };
};

export default useCustomSnackbar;
