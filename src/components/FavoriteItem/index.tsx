import {Text, View} from 'react-native';
import {ProductItemProps} from '../../types';
import Touchable from '../Touchable';
import styles from './style';
import {useFavorite, useTheme} from '../../hooks';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';
import IconButton from '../IconButton';
import {Icons, Radius} from '../../constants';
import PriceTag from '../PriceTag';
import RatingTag from '../RatingTag';

const FavoriteItem: React.FC<ProductItemProps> = ({item, onPress}) => {
  const {colors} = useTheme();
  const {isFavorite, toggleItemFavorite} = useFavorite();

  return (
    <Touchable onPress={onPress}>
      <View style={[styles.container, {backgroundColor: colors.secondary}]}>
        <CachedImage
          source={item.image}
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
              icon={
                <Icons.HEART
                  color={isFavorite(item.id) ? 'none' : colors.black}
                  fill={isFavorite(item.id) ? colors.black : 'none'}
                  width={20}
                  height={20}
                />
              }
              onPress={() => toggleItemFavorite(item)}
            />
          </View>

          <PriceTag finalPrice={item.price} defaultPrice={100} />

          <View style={styles.footerContainer}>
            <RatingTag averageRating={item.rating} totalRating={item.rating} />
          </View>
        </View>
      </View>
    </Touchable>
  );
};

export default FavoriteItem;
