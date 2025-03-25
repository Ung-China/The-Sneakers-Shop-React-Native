import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useCallback, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';

const useAddress = () => {
  const [activeLabel, setActiveLabel] = useState(0);
  const [label, setLabel] = useState('Home');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
  const [streetLine1, setStreetLine1] = useState('');
  const [streetLine2, setStreetLine2] = useState('');
  const [activeProvince, setActiveProvince] = useState();
  const [province, setProvince] = useState('');
  const [errorProvince, setErrorProvince] = useState('');
  const [note, setNoted] = useState('');

  const {t} = useTranslation();

  const bottomSheetProvinceModalRef = useRef<BottomSheetModal>(null);

  const handleProvinceSheetChanges = useCallback((index: number) => {
    console.log('Province Sheet changed to index', index);
  }, []);

  const toggleAddressLabel = (id: number, name: string) => {
    setActiveLabel(id);
    setLabel(name);
  };

  const toggleProvince = useCallback((id: number, name: string) => {
    setActiveProvince(id);
    setProvince(name);
    bottomSheetProvinceModalRef.current?.close();
  }, []);

  const toggleProvinceSheet = useCallback(() => {
    bottomSheetProvinceModalRef.current?.present();
  }, []);

  const clearError = useCallback(() => {
    setErrorPhoneNumber('');
    setErrorProvince('');
  }, []);

  const validate = useCallback(() => {
    let valid = true;
    clearError();

    if (phoneNumber === '') {
      valid = false;
      setErrorPhoneNumber(t('phoneisrequired'));
    }
    if (!province.trim()) {
      setErrorProvince(t('provinceisrequired'));
      valid = false;
    }

    return valid;
  }, [phoneNumber]);

  const save = () => {
    if (!validate()) {
      return;
    }

    console.log('✅ Address Data:', {
      label,
      phoneNumber,
      streetLine1,
      streetLine2,
      province,
      activeProvince,
      note,
    });
  };

  return {
    handleProvinceSheetChanges,
    bottomSheetProvinceModalRef,
    toggleAddressLabel,
    activeLabel,
    label,
    toggleProvinceSheet,
    toggleProvince,
    activeProvince,
    province,
    errorProvince,
    save,
    setPhoneNumber,
    phoneNumber,
    errorPhoneNumber,
    setStreetLine1,
    streetLine1,
    setStreetLine2,
    streetLine2,
    setNoted,
    note,
  };
};
export default useAddress;
