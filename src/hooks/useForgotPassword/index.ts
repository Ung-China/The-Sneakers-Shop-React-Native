import {useState} from 'react';
const useForgotPassword = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  const verifyOTP = () => {
    setIsVerified(true);
    closeModal();
  };
  return {
    isModalVisible,
    isVerified,
    openModal,
    closeModal,
    verifyOTP,
  };
};
export default useForgotPassword;
