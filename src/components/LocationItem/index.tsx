import {Text, View} from 'react-native';
import styles from './style';
import {locationItemProps} from '../../types';
import {CachedImage} from '@georstat/react-native-image-cache';
import {useTheme} from '../../hooks';
import {Icons, Radius} from '../../constants';
import LoadingImage from '../LoadingImage';
import Touchable from '../Touchable';
import {useTranslation} from 'react-i18next';

const LocationItem: React.FC<locationItemProps> = ({item, onPress}) => {
  const {colors} = useTheme();
  const {t} = useTranslation();

  const handlePress = () => {
    if (onPress) {
      onPress(item.latitude, item.longitude, item.name);
    }
  };

  return (
    <View style={[styles.container]}>
      <CachedImage
        source={item.image}
        style={[styles.imageStyle, {backgroundColor: colors.white}]}
        imageStyle={{
          borderTopLeftRadius: Radius.DEFAULT,
          borderBottomLeftRadius: Radius.DEFAULT,
          resizeMode: 'cover',
        }}
        loadingImageComponent={() => (
          <LoadingImage iconSize={50} imageStyle={styles.loadingImagestyle} />
        )}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.mapContainer}>
          <Icons.SMALLMAP width={20} height={25} color={colors.grey} />
          <Text numberOfLines={2} style={styles.shopLocation}>
            {item.shopLocation}
          </Text>
        </View>
        <View style={styles.mapContainer}>
          <Icons.TIME width={22} height={18} color={colors.grey} />
          <Text style={styles.time}>
            {item.open} - {item.close}
          </Text>
        </View>
        <Touchable style={styles.openMapContainer} onPress={handlePress}>
          <Text style={styles.openMap}>{t('openMap')}</Text>
        </Touchable>
      </View>
    </View>
  );
};

export default LocationItem;
