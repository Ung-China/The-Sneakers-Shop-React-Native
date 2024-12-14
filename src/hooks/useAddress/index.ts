import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useCallback, useRef, useState} from 'react';

const useAddress = () => {
  const [activeAddressLabel, setActiveAddressLabel] = useState(0);
  const [activeCity, setActiveCity] = useState(0);

  const bottomSheetCityModalRef = useRef<BottomSheetModal>(null);

  const handleCitySheetChanges = useCallback((index: number) => {
    console.log('City Sheet changed to index', index);
  }, []);

  const toggleAddressLabel = (id: number) => {
    setActiveAddressLabel(prev => (prev === id ? 0 : id));
  };

  const toggleCity = (id: number) => {
    setActiveCity(prev => (prev === id ? 0 : id));
  };

  const toggleCitySheet = useCallback(() => {
    bottomSheetCityModalRef.current?.present();
  }, []);

  const handleCitySheetDismiss = useCallback(() => {}, []);

  return {
    activeAddressLabel,
    toggleAddressLabel,
    handleCitySheetChanges,
    bottomSheetCityModalRef,
    toggleCitySheet,
    handleCitySheetDismiss,
    activeCity,
    toggleCity,
  };
};
export default useAddress;
