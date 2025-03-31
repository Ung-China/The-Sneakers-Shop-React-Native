import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useCallback, useRef, useState} from 'react';
import {addresss} from '../../models/Address';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../types';
import {useTranslation} from 'react-i18next';
import {colors} from '../../constants/colors/colorTypes';
import {Fonts} from '../../constants';
import Snackbar from 'react-native-snackbar';

const useDelivery = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const {t} = useTranslation();

  const bottomSheetDeliveryModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetLogisticModalRef = useRef<BottomSheetModal>(null);
  const [logistic, setLogistic] = useState('');
  const [tempLogistic, setTempLogistic] = useState('');
  const [activeLogistic, setActiveLogistic] = useState(null);
  const [tempActiveLogistic, setTempActiveLogistic] = useState(null);
  const [errorLogistic, setErrorLogistic] = useState(false);

  const [activeAddress, setActiveAddress] = useState(null);
  const [tempActiveAddress, setTempActiveAddress] = useState(null);
  const [address, setAddress] = useState();
  const [tempAddress, setTempAddress] = useState();
  const [errorAddress, setErrorAddress] = useState(false);

  console.log('CHECK ADDRESS', address);

  const [selectedOption, setSelectedOption] = useState('pickup');

  const selectOption = (option: string) => {
    setSelectedOption(option);
  };

  const toggleLogisticSheet = useCallback(() => {
    bottomSheetLogisticModalRef.current?.present();
  }, []);

  const toggleCloseLogisticSheet = useCallback(() => {
    bottomSheetLogisticModalRef.current?.close();
  }, []);

  const handleLogisticSheetChanges = useCallback((index: number) => {
    console.log('Logistic Sheet changed to index', index);
  }, []);

  const toggleApplyLogistic = useCallback(() => {
    if (tempActiveLogistic === null) {
      Snackbar.show({
        text: t('pleaseChoseLogisticCompany'),
        textColor: 'white',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.error,
        fontFamily: Fonts.REGULAR,
      });
    } else {
      setActiveLogistic(tempActiveLogistic);
      setLogistic(tempLogistic);
      bottomSheetLogisticModalRef.current?.close();
    }
  }, [tempActiveLogistic, tempLogistic]);

  const handleDeliverySheetChanges = useCallback((index: number) => {
    console.log('Delivery Sheet changed to index', index);
  }, []);

  const toggleDeliverySheet = useCallback(() => {
    bottomSheetDeliveryModalRef.current?.present();
  }, []);

  const toggleCloseDeliverySheet = useCallback(() => {
    bottomSheetDeliveryModalRef.current?.close();
  }, []);

  const toggleApplyAddress = useCallback(() => {
    if (setTempActiveAddress === null) {
      Snackbar.show({
        text: t('pleaseChooseAddress'),
        textColor: 'white',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.error,
        fontFamily: Fonts.REGULAR,
      });
    } else {
      setActiveAddress(tempActiveAddress);
      setAddress(tempAddress);
      bottomSheetLogisticModalRef.current?.close();
    }
  }, [setTempActiveAddress, tempAddress]);

  // const toggleAddress = (id: number) => {
  //   setActiveAddress(id);
  // };

  const handleNavigateToScreenAddress = useCallback(() => {
    bottomSheetDeliveryModalRef.current?.close();
    return navigation.navigate('Address');
  }, []);

  const handleNavigateToScreenCheckout = useCallback(() => {
    if (selectedOption === 'pickup') {
      return navigation.navigate('Checkout');
    }
    let hasError = false;

    if (!logistic) {
      setErrorLogistic(true);
      hasError = true;
    } else {
      setErrorLogistic(false);
    }

    // if (!activeAddress) {
    //   setErrorAddress(true);
    //   Snackbar.show({
    //     text: t('pleaseSelectAddress'),
    //     textColor: 'white',
    //     duration: Snackbar.LENGTH_LONG,
    //     backgroundColor: colors.error,
    //     fontFamily: Fonts.REGULAR,
    //   });
    //   hasError = true;
    // } else {
    //   setErrorAddress(false);
    // }

    if (!hasError) {
      navigation.navigate('Checkout');
    }
  }, [logistic, activeAddress, selectedOption]);

  return {
    selectedOption,
    selectOption,

    bottomSheetLogisticModalRef,
    handleLogisticSheetChanges,
    toggleCloseLogisticSheet,
    toggleApplyLogistic,
    toggleLogisticSheet,

    bottomSheetDeliveryModalRef,
    handleDeliverySheetChanges,
    toggleCloseDeliverySheet,
    toggleApplyAddress,
    toggleDeliverySheet,

    setActiveAddress,
    setAddress,
    setTempAddress,
    setTempActiveAddress,
    activeAddress,
    address,
    tempActiveAddress,
    errorAddress,

    handleNavigateToScreenAddress,
    handleNavigateToScreenCheckout,

    setActiveLogistic,
    setLogistic,
    setTempLogistic,
    setTempActiveLogistic,
    activeLogistic,
    logistic,
    tempActiveLogistic,
    errorLogistic,
  };
};
export default useDelivery;
