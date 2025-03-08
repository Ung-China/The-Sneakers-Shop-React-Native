import {View} from 'react-native';
import Touchable from '../Touchable';
import styles from './style';
import {useTheme} from '../../hooks';
import {Radius} from '../../constants';
import Skeleton from '../Skeleton';

const FavoriteItemSkeleton: React.FC = () => {
  const {colors} = useTheme();

  return (
    <Touchable onPress={() => {}}>
      <View style={[styles.container, {backgroundColor: colors.secondary}]}>
        <View style={styles.imageStyle}>
          <Skeleton
            containerStyle={{
              height: 90,
              width: 90,
              borderRadius: Radius.DEFAULT,
            }}
          />
        </View>

        <View style={styles.heroContainer}>
          <Skeleton
            containerStyle={{
              height: 2.5,
              width: 200,
              borderRadius: Radius.SMALL,
            }}
          />
          <Skeleton containerStyle={{height: 20, borderRadius: Radius.SMALL}} />
          <Skeleton
            containerStyle={{
              height: 2.5,
              width: 100,
              borderRadius: Radius.SMALL,
            }}
          />
        </View>
      </View>
    </Touchable>
  );
};

export default FavoriteItemSkeleton;
