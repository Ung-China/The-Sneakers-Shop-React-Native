import {Image, View} from 'react-native';
import {Images} from '../../constants';
import styles from './style';

const StartUpScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Images.STARTUP}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default StartUpScreen;
