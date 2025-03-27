import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useCallback, useRef, useState} from 'react';

const useCustomSnackbar = () => {
  const customSnackbarRef = useRef<BottomSheetModal>(null);

  const showSnackbar = useCallback(() => {
    if (customSnackbarRef.current) {
      customSnackbarRef.current.present();
      setTimeout(() => {
        customSnackbarRef.current?.close();
      }, 1000);
    }
  }, []);

  const onCustomSnackbarChanges = useCallback((index: number) => {
    console.log('Custom Snackbar changed to index', index);
  }, []);

  return {
    customSnackbarRef,
    showSnackbar,
    onCustomSnackbarChanges,
  };
};

export default useCustomSnackbar;
