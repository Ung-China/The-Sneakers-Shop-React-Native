import {Text, View} from 'react-native';
import styles from './style';
import Touchable from '../Touchable';
import {NotificationProps} from '../../types';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';
import {Icons, Radius, Spacing} from '../../constants';
import {useTheme} from '../../hooks';

const NotificationItem: React.FC<NotificationProps> = ({onPress, item}) => {
  const {colors} = useTheme();
  return (
    <Touchable
      onPress={onPress}
      style={[styles.container, {backgroundColor: colors.secondary}]}>
      {/* <CachedImage
        source={item.imageUrl}
        style={[styles.imageStyle]}
        imageStyle={{borderRadius: Radius.DEFAULT}}
        loadingImageComponent={() => (
          <LoadingImage iconSize={80} imageStyle={styles.loadingImagestyle} />
        )}
      /> */}
      <View style={styles.imageStyle}>
        <Icons.LOGO width={70} height={70} />
      </View>

      <View style={styles.heroContainer}>
        <Text style={[styles.title, {color: colors.text}]}>{item.title}</Text>
        <Text
          style={[styles.description, {color: colors.text}]}
          numberOfLines={3}>
          {item.description}
        </Text>
      </View>
    </Touchable>
  );
};

export default NotificationItem;
