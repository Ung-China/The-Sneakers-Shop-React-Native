import {useCallback, useRef, useState} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

const useShopLocation = () => {
  const bottomSheetOpenMapModalRef = useRef<BottomSheetModal>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [name, setName] = useState('');

  const handleOpenMapSheetChanges = useCallback((index: number) => {
    console.log('Login Sheet changed to index', index);
  }, []);

  const handleOpenModalSheetDismiss = useCallback(() => {
    bottomSheetOpenMapModalRef.current?.close();
  }, []);

  const handleOpenMapModalSheet = useCallback(
    (latitude: number, longitude: number, name: string) => {
      setLatitude(latitude);
      setLongitude(longitude);
      setName(name);
      bottomSheetOpenMapModalRef.current?.present();
    },
    [],
  );

  return {
    bottomSheetOpenMapModalRef,
    handleOpenMapSheetChanges,
    handleOpenModalSheetDismiss,
    handleOpenMapModalSheet,
    latitude,
    longitude,
    name,
  };
};

export default useShopLocation;
