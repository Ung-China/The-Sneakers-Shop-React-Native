import {useCallback, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {Address} from '../../models';
import Snackbar from 'react-native-snackbar';
import {colors} from '../../constants/colors/colorTypes';
import {Fonts} from '../../constants';
import {useTranslation} from 'react-i18next';
import useCart from '../useCart';
import useUser from '../useUser';

const useCheckout = ({
  selectedOption,
  logistic,
  address,
}: {
  selectedOption: string;
  logistic: string;
  address?: Address;
}) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [activePaymentMethod, setActivePaymentMethod] = useState<any>();
  const [paySlip, setPaySlip] = useState<any>(null);
  const [paySlipLoading, setPaySlipLoading] = useState(false);
  const [hasSelectedPaySlip, setHasSelectedPaySlip] = useState(false);

  const {t} = useTranslation();
  const {cartItems} = useCart();
  const {user} = useUser();

  const openImagePicker = async () => {
    try {
      setPaySlipLoading(true);
      const image = await ImagePicker.openPicker({
        width: 500,
        height: 500,
        cropping: true,
      });

      if (image?.path) {
        setPaySlip(image.path);
        setHasSelectedPaySlip(true);
      }
    } catch (error) {
      console.log('[DEBUG] IMAGE_INPUT', error);
    } finally {
      setPaySlipLoading(false);
    }
  };

  const validateCheckout = useCallback(() => {
    if (!paymentMethod) {
      Snackbar.show({
        text: t('paymentMethodRequired'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.error,
        fontFamily: Fonts.REGULAR,
      });
      return false;
    }

    if (!paySlip) {
      Snackbar.show({
        text: t('payslipRequired'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.error,
        fontFamily: Fonts.REGULAR,
      });
      return false;
    }

    return true;
  }, [paymentMethod, paySlip]);

  const checkOut = async () => {
    try {
      if (!validateCheckout()) {
        return;
      }

      console.log('PASSED');
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE CHECKOUT', error);
    } finally {
    }
  };

  return {
    activePaymentMethod,
    paymentMethod,
    setPaymentMethod,
    setActivePaymentMethod,
    openImagePicker,
    paySlip,
    paySlipLoading,
    hasSelectedPaySlip,
    checkOut,
  };
};

export default useCheckout;
