import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {useState} from 'react';
import {API_ENDPOINTS, GET} from '../../api';
import {User} from '../../models';
import {loginUserSuccess} from '../../store/actions';

const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

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

  return {
    user,
    isLoggedIn,
    isLoading,
    getUserInfo,
  };
};

export default useUser;
