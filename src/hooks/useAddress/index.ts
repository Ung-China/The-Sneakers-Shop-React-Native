import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useCallback, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Address} from '../../models';
import {useDispatch, useSelector} from 'react-redux';
import {addAddress} from '../../store/actions';
import {RootState} from '../../store';
import {SnackbarEventEmitter} from '../../utils';

const useAddress = (navigation?: any) => {
  const [activeLabel, setActiveLabel] = useState(0);
  const [label, setLabel] = useState('Home');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
  const [streetLine1, setStreetLine1] = useState('');
  const [streetLine2, setStreetLine2] = useState('');
  const [activeProvince, setActiveProvince] = useState(null);
  const [province, setProvince] = useState('');
  const [errorProvince, setErrorProvince] = useState('');
  const [note, setNoted] = useState('');
  const bottomSheetProvinceModalRef = useRef<BottomSheetModal>(null);

  const {t} = useTranslation();
  const dispatch = useDispatch();
  const addresses = useSelector((state: RootState) => state.address.address);

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

    if (province === '') {
      console.log('Checking province', province);
      setErrorProvince(t('provinceisrequired'));
      valid = false;
    }

    return valid;
  }, [phoneNumber, province]);

  const save = () => {
    if (!validate()) {
      return;
    }

    const newAddress = new Address(
      Date.now(),
      label,
      phoneNumber,
      streetLine1,
      streetLine2,
      province,
      note,
    );
    dispatch(addAddress(newAddress));
    navigation.goBack();
    SnackbarEventEmitter.emit('SHOW_SNACKBAR', {
      type: 'success',
      message: t('addressSavedSuccessfully'),
    });
  };

  return {
    addresses,
    handleProvinceSheetChanges,
    bottomSheetProvinceModalRef,
    toggleAddressLabel,
    activeLabel,
    label,
    toggleProvinceSheet,
    toggleProvince,
    activeProvince,
    setProvince,
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
