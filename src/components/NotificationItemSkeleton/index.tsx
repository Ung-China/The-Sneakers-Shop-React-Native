import {View} from 'react-native';
import styles from './style';
import Touchable from '../Touchable';
import { Radius} from '../../constants';
import {useTheme} from '../../hooks';
import Skeleton from '../Skeleton';

const NotificationItemSkeleton: React.FC = () => {
  const {colors} = useTheme();
  return (
    <Touchable disabled style={[styles.container, {backgroundColor: colors.secondary}]}>
      <View style={styles.imageStyle}>
        <Skeleton
          containerStyle={{height: 90, width: 90, borderRadius: Radius.DEFAULT}}
        />
      </View>

      <View style={styles.heroContainer}>
        <Skeleton
          containerStyle={{height: 2.5, width: 200, borderRadius: Radius.SMALL}}
        />
        <Skeleton containerStyle={{height: 20, borderRadius: Radius.SMALL}} />
      </View>
    </Touchable>
  );
};

export default NotificationItemSkeleton;
