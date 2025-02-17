import {Alert, Text, View} from 'react-native';
import {ProductItemProps} from '../../types';
import styles from './style';
import Touchable from '../Touchable';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';
import {Icons, Radius, Spacing} from '../../constants';
import {useTheme} from '../../hooks';
import PriceTag from '../PriceTag';
import IconButton from '../IconButton';
import RatingTag from '../RatingTag';
import Skeleton from '../Skeleton';

const ProductItem: React.FC<ProductItemProps> = ({
  item,
  wrapperStyle,
  onPress,
}) => {
  const {colors} = useTheme();

  const onAddToCartPress = () => {
    return Alert.alert('Add to cart');
  };

  const onFavoritePress = () => {
    return Alert.alert('Press add to favorite');
  };

  return (
    <Touchable
      onPress={onPress}
      style={[
        styles.wrapper,
        wrapperStyle,
        {backgroundColor: colors.secondary},
      ]}>
      <View style={[styles.container]}>
        <CachedImage
          source={item.image}
          style={[styles.imageStyle, {backgroundColor: colors.white}]}
          imageStyle={{borderRadius: Radius.DEFAULT}}
          loadingImageComponent={() => (
            <LoadingImage
              iconSize={100}
              imageStyle={styles.loadingImagestyle}
            />
          )}
        />

        <View style={styles.promotionContainer}>
          <Icons.DISCOUNTTAG width={40} height={40} color={'red'} />
          <View style={styles.promotionWrapper}>
            <Text style={styles.value}>20%</Text>
            <Text style={styles.discountText}>OFF</Text>
          </View>
        </View>

        <IconButton
          style={[styles.heartButton, {backgroundColor: colors.lightGrey}]}
          icon={<Icons.HEART color={colors.black} width={20} height={20} />}
          onPress={onFavoritePress}
        />

        <View style={styles.hero}>
          <Text style={[styles.name, {color: colors.text}]} numberOfLines={1}>
            {item.name}
          </Text>
          <PriceTag price={100} promotion={100} />
          <View style={styles.heroFooter}>
            <RatingTag averageRating={item.rating} totalRating={item.rating} />
            <IconButton
              icon={<Icons.ADD color={colors.secondary} />}
              style={[
                styles.addToCart,
                {backgroundColor: colors.secondaryReversed},
              ]}
              onPress={onAddToCartPress}
            />
          </View>
        </View>
      </View>
    </Touchable>
  );
};

export default ProductItem;
