import {useCallback, useMemo, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {Address} from '../../models';
import Snackbar from 'react-native-snackbar';
import {colors} from '../../constants/colors/colorTypes';
import {Fonts} from '../../constants';
import {useTranslation} from 'react-i18next';
import useCart from '../useCart';
import useUser from '../useUser';
import {dummyPaymentMethods} from '../../models/PaymentMethod';
import {API_ENDPOINTS, POST} from '../../api';

const useCheckout = ({
  selectedOption,
  logistic,
  address,
  deliveryCost,
}: {
  selectedOption: string;
  logistic: string;
  address?: Address;
  deliveryCost: number;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [activePaymentMethod, setActivePaymentMethod] = useState<any>();
  const [paySlip, setPaySlip] = useState<any>(null);
  const [paySlipLoading, setPaySlipLoading] = useState(false);
  const [hasSelectedPaySlip, setHasSelectedPaySlip] = useState(false);

  const {t} = useTranslation();
  const {cartItems} = useCart();
  const {user} = useUser();

  const paymentOptions = useMemo(() => {
    return selectedOption === 'pickup'
      ? dummyPaymentMethods.filter(item => item.value !== 'cash_on_delivery')
      : dummyPaymentMethods.filter(item => item.value !== 'pay_at_store');
  }, [selectedOption]);

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

    if (
      paymentMethod !== 'cash_on_delivery' &&
      paymentMethod !== 'pay_at_store' &&
      !paySlip
    ) {
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
    if (!validateCheckout()) {
      return;
    }

    try {
      setIsLoading(true);
      const formData = new FormData();

      formData.append('customer_id', user?.id);
      formData.append('order_type', selectedOption);
      formData.append('delivery_type', logistic);
      formData.append('delivery_fee', deliveryCost);
      formData.append('payment_method', paymentMethod);

      if (paySlip) {
        formData.append('pay_slip', {
          uri: paySlip.path,
          name: 'profile.jpg',
          type: paySlip.mime,
        });
      }

      if (
        selectedOption === 'delivery' &&
        address &&
        typeof address === 'object'
      ) {
        Object.entries(address).forEach(([key, value]) => {
          console.log(`address[${key}]:`, value);
          formData.append(`address[${key}]`, String(value));
        });
      }

      cartItems.forEach((item, index) => {
        formData.append(`order_details[${index}][product_id]`, String(item.id));
        formData.append(
          `order_details[${index}][brand_id]`,
          String(item.brandId),
        );
        formData.append(
          `order_details[${index}][product_qty]`,
          String(item.quantity),
        );
        formData.append(
          `order_details[${index}][product_price]`,
          String(item.price),
        );
        formData.append(
          `order_details[${index}][product_size]`,
          item.variantName,
        );
        formData.append(
          `order_details[${index}][discount]`,
          String(item.discount),
        );

        if (item.discountType) {
          formData.append(
            `order_details[${index}][discount_type]`,
            item.discountType,
          );
        }
      });

      const response = await POST(
        API_ENDPOINTS.CHECKOUT,
        formData,
        {},
        {
          Authorization: `Bearer ${user?.token}`,
        },
      );

      console.log('CHECK RESPONSE', response);
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
    paymentOptions,
  };
};

export default useCheckout;
