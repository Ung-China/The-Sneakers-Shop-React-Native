import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const useUser = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return {
    user,
  };
};

export default useUser;
