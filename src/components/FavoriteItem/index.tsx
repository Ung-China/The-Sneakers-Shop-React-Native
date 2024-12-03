import {Alert, Text, View} from 'react-native';
import {ProductItemProps} from '../../types';
import Touchable from '../Touchable';
import styles from './style';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../hooks';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';
import IconButton from '../IconButton';
import {Icons, Radius} from '../../constants';
import currencyFormat from '../../helpers/CurrencyFormat';
import PriceTag from '../PriceTag';
import RatingTag from '../RatingTag';

const FavoriteItem: React.FC<ProductItemProps> = ({item, onPress}) => {
  const {t} = useTranslation();
  const {colors} = useTheme();

  const onFavoritePress = () => {
    return Alert.alert('Toggle Favorite');
  };

  return (
    <Touchable onPress={onPress}>
      <View style={[styles.container, {backgroundColor: colors.secondary}]}>
        <CachedImage
          source={item.imageUrl}
          style={[styles.imageStyle, {backgroundColor: colors.white}]}
          imageStyle={{borderRadius: Radius.DEFAULT}}
          loadingImageComponent={() => (
            <LoadingImage iconSize={50} imageStyle={styles.loadingImagestyle} />
          )}
        />
        <View style={styles.hero}>
          <View style={styles.heroHeader}>
            <Text style={[styles.name, {color: colors.text}]}>{item.name}</Text>
            <IconButton
              style={[styles.heartButton, {backgroundColor: colors.white}]}
              icon={<Icons.HEART color={colors.black} width={20} height={20} />}
              onPress={onFavoritePress}
            />
          </View>

          <PriceTag price={100} promotion={100} />

          <View style={styles.footerContainer}>
            <RatingTag averageRating={3} totalRating={3} />
          </View>
        </View>
      </View>
    </Touchable>
  );
};

export default FavoriteItem;
