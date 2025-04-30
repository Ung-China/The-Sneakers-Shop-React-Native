import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {useState} from 'react';
import {API_ENDPOINTS, GET, POST} from '../../api';
import {User} from '../../models';
import {loginUserSuccess, logoutUserSuccess} from '../../store/actions';
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

      if (response?.success) {
        dispatch(logoutUserSuccess());
        Snackbar.show({
          text: t('logoutSuccess'),
          textColor: 'white',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.success,
          fontFamily: Fonts.REGULAR,
        });
      } else {
        Snackbar.show({
          text: t('logoutFailed'),
          textColor: 'white',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.error,
          fontFamily: Fonts.REGULAR,
        });
      }
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE LOGOUT', error);
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
  };
};

export default useUser;
