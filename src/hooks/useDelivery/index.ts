import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useCallback, useRef, useState} from 'react';
import {logistics} from '../../models/Logistic';
import {addresss} from '../../models/Address';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../types';
import {useTranslation} from 'react-i18next';
import Snackbar from 'react-native-snackbar';
import {colors} from '../../constants/colors/colorTypes';
import {Fonts} from '../../constants';

const useDelivery = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const {t} = useTranslation();

  const [selectedOption, setSelectedOption] = useState<'pickup' | 'delivery'>(
    'pickup',
  );

  const bottomSheetDeliveryModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetLogisticModalRef = useRef<BottomSheetModal>(null);

  const [logistic, setLogistic] = useState('');
  const [activeLogistic, setActiveLogistic] = useState<number | null>(null);

  const selectOption = (option: 'pickup' | 'delivery') => {
    setSelectedOption(option);
  };
  const [activeAddress, setActiveAddress] = useState<number>(
    addresss[0]?.id || 0,
  );

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
    if (activeLogistic === null) {
      Snackbar.show({
        text: t('pleaseChoseLogisticCompany'),
        textColor: 'white',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.error,
        fontFamily: Fonts.REGULAR,
      });
    } else {
      bottomSheetLogisticModalRef.current?.close();
    }
  }, [activeLogistic]);

  const handleDeliverySheetChanges = useCallback((index: number) => {
    console.log('Delivery Sheet changed to index', index);
  }, []);

  const toggleCloseDeliverySheet = useCallback(() => {
    bottomSheetDeliveryModalRef.current?.close();
  }, []);

  const toggleAddress = (id: number) => {
    setActiveAddress(id);
  };

  const toggleDeliverySheet = useCallback(() => {
    bottomSheetDeliveryModalRef.current?.present();
  }, []);

  const handleNavigateToScreenAddress = useCallback(() => {
    bottomSheetDeliveryModalRef.current?.close();
    return navigation.navigate('Address');
  }, []);

  const handleNavigateToScreenCheckout = useCallback(() => {
    return navigation.navigate('Checkout');
  }, []);

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

    activeAddress,
    toggleAddress,
    toggleDeliverySheet,

    handleNavigateToScreenAddress,
    handleNavigateToScreenCheckout,

    setActiveLogistic,
    setLogistic,
    activeLogistic,
    logistic,
  };
};
export default useDelivery;
