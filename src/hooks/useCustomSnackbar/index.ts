import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useCallback, useRef, useState} from 'react';

const useCustomSnackbar = () => {
  const customSnackbarRef = useRef<BottomSheetModal>(null);

  const [type, setType] = useState('success');
  const [message, setMessage] = useState('');

  const showSnackbar = useCallback(
    (type = 'success', message = '', duration = 2000) => {
      setType(type);
      setMessage(message);

      if (customSnackbarRef.current) {
        customSnackbarRef.current.present();
        setTimeout(() => {
          customSnackbarRef.current?.close();
        }, duration);
      }
    },
    [],
  );

  return {
    customSnackbarRef,
    type,
    message,
    showSnackbar,
  };
};

export default useCustomSnackbar;
