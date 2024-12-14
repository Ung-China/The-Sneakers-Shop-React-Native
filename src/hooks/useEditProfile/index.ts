import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Validator} from '../../helpers';

const useEditProfile = () => {
  const {t} = useTranslation();

  const [fullName, setFullName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [errorFullName, setErrorFullName] = useState<string>('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorOldPassword, setErrorOldPassword] = useState<string>('');
  const [errorNewPassword, setErrorNewPassword] = useState<string>('');

  const clearErrors = useCallback(() => {
    setErrorFullName('');
    setErrorPhoneNumber('');
    setErrorEmail('');
    setErrorOldPassword('');
    setErrorNewPassword('');
  }, []);

  const validateFields = useCallback(() => {
    let valid = true;
    clearErrors();

    if (fullName === '') {
      valid = false;
      setErrorFullName(t('fullNameisrequired'));
    }

    if (phoneNumber === '') {
      valid = false;
      setErrorPhoneNumber(t('phoneisrequired'));
    } else if (!Validator.validatePhoneNumber(phoneNumber)) {
      valid = false;
      setErrorPhoneNumber(t('pleaseenteravalidphonenumber'));
    }

    if (email === '') {
      valid = false;
      setErrorEmail(t('emailisrequired'));
    } else if (!Validator.validateEmail(phoneNumber)) {
      valid = false;
      setErrorEmail(t('pleaseenteravalidemailaddress'));
    }

    if (oldPassword === '') {
      valid = false;
      setErrorOldPassword(t('oldpasswordisrequired'));
    }

    if (newPassword === '') {
      valid = false;
      setErrorNewPassword(t('newpasswordisrequired'));
    }

    return valid;
  }, [fullName, phoneNumber, email, oldPassword, newPassword]);

  const updateProfile = useCallback(() => {
    if (!validateFields()) return;

    console.log('FULL NAME:', fullName);
    console.log('PHONE NUMBER:', phoneNumber);
    console.log('EMAIL:', email);
    console.log('OLD PASSWORD:', oldPassword);
    console.log('NEW PASSWORD:', newPassword);
  }, [fullName, phoneNumber, email, oldPassword, newPassword, validateFields]);

  return {
    fullName,
    phoneNumber,
    email,
    oldPassword,
    newPassword,
    errorFullName,
    errorPhoneNumber,
    errorEmail,
    errorOldPassword,
    errorNewPassword,
    setFullName,
    setPhoneNumber,
    setEmail,
    setOldPassword,
    setNewPassword,
    clearErrors,
    validateFields,
    updateProfile,
  };
};
export default useEditProfile;
