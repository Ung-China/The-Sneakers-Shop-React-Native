import {useState} from 'react';

const useCheckout = () => {
  const [paymentMethod, setPaymentMethod] = useState('aba');
  const [activePaymentMethod, setActivePaymentMethod] = useState(1);

  return {
    activePaymentMethod,
    setPaymentMethod,
    setActivePaymentMethod,
  };
};

export default useCheckout;
