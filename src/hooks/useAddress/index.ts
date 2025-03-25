import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useCallback, useRef, useState} from 'react';

const useAddress = () => {
  const [label, setLabel] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
  const [streetLine1, setStreetLine1] = useState('');
  const [streetLine2, setStreetLine2] = useState('');
  const [activeProvince, setActiveProvince] = useState(0);
  const [province, setProvince] = useState('');
  const [errorProvince, setErrorProvince] = useState('');
  const [note, setNoted] = useState('');

  const [activeAddressLabel, setActiveAddressLabel] = useState(0);
  const [activeCity, setActiveCity] = useState(0);

  const bottomSheetProvinceModalRef = useRef<BottomSheetModal>(null);

  const handleProvinceSheetChanges = useCallback((index: number) => {
    console.log('Province Sheet changed to index', index);
  }, []);

  const toggleAddressLabel = (id: number) => {
    setActiveAddressLabel(prev => (prev === id ? 0 : id));
  };

  const toggleProvince = useCallback((id: number, name: string) => {
    setActiveProvince(id);
    setProvince(name);
    bottomSheetProvinceModalRef.current?.close();
  }, []);

  const toggleProvinceSheet = useCallback(() => {
    bottomSheetProvinceModalRef.current?.present();
  }, []);

  return {
    handleProvinceSheetChanges,
    bottomSheetProvinceModalRef,
    toggleAddressLabel,
    activeAddressLabel,
    toggleProvinceSheet,
    toggleProvince,
    activeProvince,
    province,
  };
};
export default useAddress;
