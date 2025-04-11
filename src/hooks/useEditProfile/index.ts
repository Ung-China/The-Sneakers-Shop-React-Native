import {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {normalizePhoneNumber, Validator} from '../../helpers';
import useUser from '../useUser';
import ImagePicker from 'react-native-image-crop-picker';
import {API_ENDPOINTS, POST} from '../../api';
import Snackbar from 'react-native-snackbar';
import {colors} from '../../constants/colors/colorTypes';
import {Fonts} from '../../constants';
import {User} from '../../models';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {loginUserSuccess} from '../../store/actions';

const useEditProfile = () => {
  const {t} = useTranslation();
  const {user, isLoggedIn} = useUser();
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [profileImage, setProfileImage] = useState<any>(null);

  const [errorFullName, setErrorFullName] = useState<string>('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorOldPassword, setErrorOldPassword] = useState<string>('');
  const [errorNewPassword, setErrorNewPassword] = useState<string>('');

  useEffect(() => {
    if (isLoggedIn && user) {
      setFullName(user.name ?? '');
      setPhoneNumber(normalizePhoneNumber(user.phoneNumber ?? ''));
      setEmail(user.email ?? '');
    }
  }, [isLoggedIn, user]);

  const clearErrors = useCallback(() => {
    setErrorFullName('');
    setErrorPhoneNumber('');
    setErrorEmail('');
  }, []);

  const validateFields = useCallback(() => {
    let valid = true;
    clearErrors();

    if (fullName === '') {
      valid = false;
      setErrorFullName(t('fullNameisrequired'));
    }

    return valid;
  }, [fullName]);

  const openImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 500,
        height: 500,
        cropping: true,
      });
      console.log('CHECK IMAGE', image.path);
      setProfileImage(image);
    } catch (error) {
      console.log('[DEBUG] IMAGE_INPUT', error);
    }
  };

  const updateProfile = async () => {
    if (!validateFields()) {
      return;
    }
    try {
      setIsLoading(true);

      const numberWithCountryCode =
        Validator.numberWithCountryCode(phoneNumber);

      const formData = new FormData();

      if (profileImage) {
        formData.append('image', {
          uri: profileImage.path,
          name: 'profile.jpg',
          type: profileImage.mime,
        });
      }
      formData.append('name', fullName);
      formData.append('email', email);
      formData.append('phone', numberWithCountryCode);
      formData.append('old_password', oldPassword);
      formData.append('new_password', newPassword);

      const response = await POST(
        API_ENDPOINTS.UPDATE_USER_INFO,
        formData,
        {},
        {
          Authorization: `Bearer ${user?.token}`,
        },
      );

      const fetchedUser = new User(
        response.id,
        response.name,
        response.email,
        response.phone,
        response.image_url,
        response.token ?? user?.token,
      );

      dispatch(loginUserSuccess(fetchedUser));

      Snackbar.show({
        text: t('accountUpdated'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.success,
        fontFamily: Fonts.REGULAR,
      });
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE UPDATE USER PROFILE', error);
      Snackbar.show({
        text: t('accountUpdateFailed'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.error,
        fontFamily: Fonts.REGULAR,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
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
    openImagePicker,
    profileImage,
  };
};

export default useEditProfile;
