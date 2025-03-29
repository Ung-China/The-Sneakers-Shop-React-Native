import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useEffect, useRef, useState} from 'react';
import {SnackbarEventEmitter} from '../../utils';

const globalListenerAdded = {value: false};

const useCustomSnackbar = () => {
  const customSnackbarRef = useRef<BottomSheetModal>(null);
  const [type, setType] = useState('success');
  const [message, setMessage] = useState('');

  const showSnackbar = (type = 'success', message = '', duration = 2000) => {
    setType(type);
    setMessage(message);

    if (customSnackbarRef.current) {
      customSnackbarRef.current.present();
      setTimeout(() => {
        customSnackbarRef.current?.close();
      }, duration);
    }
  };

  useEffect(() => {
    if (globalListenerAdded.value) return;
    globalListenerAdded.value = true;

    const handleShowSnackbar = ({
      type,
      message,
    }: {
      type: string;
      message: string;
    }) => {
      showSnackbar(type, message);
    };

    SnackbarEventEmitter.on('SHOW_SNACKBAR', handleShowSnackbar);

    return () => {
      SnackbarEventEmitter.off('SHOW_SNACKBAR', handleShowSnackbar);
      globalListenerAdded.value = false;
    };
  }, []);

  return {
    customSnackbarRef,
    type,
    message,
    showSnackbar,
  };
};

export default useCustomSnackbar;
