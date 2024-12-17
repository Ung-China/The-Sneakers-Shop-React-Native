import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useCallback, useRef, useState} from 'react';
import {logistics} from '../../models/Logistic';
import {addresss} from '../../models/Address';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../types';

const useDelivery = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const [selectedOption, setSelectedOption] = useState<'pickUp' | 'delivery'>(
    'pickUp',
  );
  const bottomSheetDeliveryModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetLogisticModalRef = useRef<BottomSheetModal>(null);
  const [selectedLogistic, setSelectedLogistic] = useState<{
    id: number;
    name: string;
  }>({
    id: logistics[0]?.id || 0,
    name: logistics[0]?.name || '',
  });
  const [activeLogistic, setActiveLogistic] = useState<number>(
    logistics[0]?.id || 0,
  );
  const selectOption = (option: 'pickUp' | 'delivery') => {
    setSelectedOption(option);
  };
  const [activeAddress, setActiveAddress] = useState<number>(
    addresss[0]?.id || 0,
  );

  const toggleDeliverySheet = useCallback(() => {
    bottomSheetDeliveryModalRef.current?.present();
  }, []);

  const toggleLogisticSheet = useCallback(() => {
    bottomSheetLogisticModalRef.current?.present();
  }, []);

  const toggleCloseDeliverySheet = useCallback(() => {
    bottomSheetDeliveryModalRef.current?.close();
  }, []);

  const toggleCloseLogisticSheet = useCallback(() => {
    setActiveLogistic(selectedLogistic.id);
    bottomSheetLogisticModalRef.current?.close();
  }, []);

  const handleDeliverySheetChanges = useCallback((index: number) => {
    console.log('Delivery Sheet changed to index', index);
  }, []);

  const handleLogisticSheetChanges = useCallback((index: number) => {
    console.log('Logistic Sheet changed to index', index);
  }, []);

  const toggleLogistic = (id: number) => {
    setActiveLogistic(id);
  };

  const toggleAddress = (id: number) => {
    setActiveAddress(id);
  };

  const toggleApplyLogistic = useCallback(() => {
    const logistic = logistics.find(item => item.id === activeLogistic);
    if (logistic) {
      setSelectedLogistic({id: logistic.id, name: logistic.name});
    }
    bottomSheetLogisticModalRef.current?.close();
  }, [activeLogistic]);

  const handleLogisticSheetDismiss = useCallback(() => {
    setActiveLogistic(selectedLogistic.id);
  }, [selectedLogistic]);

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
    handleLogisticSheetDismiss,
    toggleCloseLogisticSheet,
    toggleApplyLogistic,
    activeLogistic,
    toggleLogistic,
    toggleLogisticSheet,
    selectedLogistic,

    bottomSheetDeliveryModalRef,
    handleDeliverySheetChanges,
    toggleCloseDeliverySheet,

    activeAddress,
    toggleAddress,
    toggleDeliverySheet,

    handleNavigateToScreenAddress,
    handleNavigateToScreenCheckout,
  };
};
export default useDelivery;
