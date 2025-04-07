import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const useUser = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return {
    user,
    isLoggedIn,
  };
};

export default useUser;
