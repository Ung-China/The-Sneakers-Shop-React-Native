import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {useState} from 'react';
import {API_ENDPOINTS, DELETE, GET, POST} from '../../api';
import {User} from '../../models';
import {
  clearCart,
  loginUserSuccess,
  logoutUserSuccess,
} from '../../store/actions';
import Snackbar from 'react-native-snackbar';
import {useTranslation} from 'react-i18next';
import {colors} from '../../constants/colors/colorTypes';
import {Fonts} from '../../constants';

const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const {t} = useTranslation();

  const user = useSelector((state: RootState) => state.user.user);
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  const getUserInfo = async () => {
    try {
      setIsLoading(true);

      const response = await GET(
        API_ENDPOINTS.GET_USER_INFO,
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
        response.is_google_login,
      );

      dispatch(loginUserSuccess(fetchedUser));
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE GET USER INFO', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);

      const response = await POST(
        API_ENDPOINTS.LOGOUT,
        {},
        {},
        {
          Authorization: `Bearer ${user?.token}`,
        },
      );

      dispatch(logoutUserSuccess());
      dispatch(clearCart());

      setTimeout(() => {
        Snackbar.show({
          text: t('logoutSuccess'),
          textColor: 'white',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.success,
          fontFamily: Fonts.REGULAR,
        });
      }, 100);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE LOGOUT', error);
      setTimeout(() => {
        Snackbar.show({
          text: t('logoutFailed'),
          textColor: 'white',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.error,
          fontFamily: Fonts.REGULAR,
        });
      }, 100);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteAccount = async () => {
    try {
      setIsLoading(true);

      const response = await DELETE(
        API_ENDPOINTS.DELETE_ACCOUNT,
        {},
        {},
        {
          Authorization: `Bearer ${user?.token}`,
        },
      );

      if (response?.success === true) {
        dispatch(logoutUserSuccess());
        dispatch(clearCart());

        setTimeout(() => {
          Snackbar.show({
            text: t('deleteAccountSuccess'),
            textColor: 'white',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: colors.success,
            fontFamily: Fonts.REGULAR,
          });
        }, 100);
      } else {
        setTimeout(() => {
          Snackbar.show({
            text: t('deleteAccountFailed'),
            textColor: 'white',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: colors.error,
            fontFamily: Fonts.REGULAR,
          });
        }, 100);
      }
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE DELETE ACCOUNT', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isLoggedIn,
    isLoading,
    getUserInfo,
    logout,
    deleteAccount,
  };
};

export default useUser;
