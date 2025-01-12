import {useState} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {User} from '../../models';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {loginUserSuccess} from '../../store/actions';
import {login} from '../../services';

const useSocial = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

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

        const userInfo = new User(
          user.uid,
          user.displayName || '',
          user.email || '',
          user.phoneNumber || '',
          user.photoURL || '',
        );

        const response = await login(userInfo);
        dispatch(loginUserSuccess(response));
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

  return {signInWithGoogle, loading};
};

export default useSocial;
