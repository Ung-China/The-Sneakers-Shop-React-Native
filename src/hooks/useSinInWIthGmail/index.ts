import {useCallback, useState} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {User} from '../../models';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {loginUserSuccess} from '../../store/actions';
import {useTranslation} from 'react-i18next';
import {Validator} from '../../helpers';

const useSinInWIthGmail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {t} = useTranslation();

  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(true);

  const clearSignInErrors = useCallback(() => {
    setErrorPhoneNumber('');
    setErrorPassword('');
  }, []);

  const validateFieldsLoginWithPhoneNumber = useCallback(() => {
    let valid = true;
    clearSignInErrors();

    if (phoneNumber === '') {
      valid = false;
      setErrorPhoneNumber(t('phoneisrequired'));
    } else if (!Validator.validatePhoneNumber(phoneNumber)) {
      valid = false;
      setErrorPhoneNumber(t('pleaseenteravalidphonenumber'));
    }

    if (password === '') {
      valid = false;
      setErrorPassword(t('passwordisrequired'));
    }

    return valid;
  }, [phoneNumber, password]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const signInWithGoogle = async () => {
    GoogleSignin.configure();
    try {
      setLoading(true);
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();

      const {idToken} = response.data;

      if (idToken) {
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        const firebaseUserCredential = await auth().signInWithCredential(
          googleCredential,
        );

        const user = firebaseUserCredential.user;

        // const userInfo = new User(
        //   user.uid,
        //   user.displayName || '',
        //   user.email || '',
        //   user.phoneNumber || '',
        //   user.photoURL || '',

        // );
      } else {
        console.log('ID Token is missing');
      }
    } catch (error) {
      if (error instanceof Error) {
        switch (error.message) {
          case statusCodes.IN_PROGRESS:
            console.log('Sign-in in progress');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log('Play services are not available');
            break;
          default:
            console.log('An error occurred: ', error.message);
            break;
        }
      } else {
        console.log('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const loginWithPhoneNumber = async () => {
    if (!validateFieldsLoginWithPhoneNumber()) return;
  };

  return {
    signInWithGoogle,
    loginWithPhoneNumber,
    loading,
    phoneNumber,
    setPhoneNumber,
    errorPhoneNumber,
    password,
    setPassword,
    errorPassword,
    passwordVisible,
    togglePasswordVisibility,
  };
};

export default useSinInWIthGmail;
