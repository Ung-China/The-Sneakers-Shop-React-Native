import {Text, View} from 'react-native';
import {ProductItemProps, StackParamList} from '../../types';
import styles from './style';
import Touchable from '../Touchable';
import {CachedImage} from '@georstat/react-native-image-cache';
import LoadingImage from '../LoadingImage';
import {Fonts, Icons, Radius} from '../../constants';
import {useCart, useFavorite, useTheme, useUser} from '../../hooks';
import PriceTag from '../PriceTag';
import IconButton from '../IconButton';
import RatingTag from '../RatingTag';
import {ProductPromotionChecker} from '../../helpers';
import {useTranslation} from 'react-i18next';
import Snackbar from 'react-native-snackbar';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const ProductItem: React.FC<ProductItemProps> = ({
  item,
  wrapperStyle,
  onPress,
  notifications,
}) => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const {colors} = useTheme();

  const {isFavorite, toggleItemFavorite} = useFavorite();
  const {addProductToCart, cartItems} = useCart();
  const {t} = useTranslation();

  console.log('CHECK CART ITEMS', cartItems);

  const {hasProductPromotion, finalPrice, discountType, discountValue} =
    ProductPromotionChecker({
      productId: item.id,
      defaultPrice: item.price,
      promotions: notifications,
      brandId: item.brandId,
    });

  const {isLoggedIn} = useUser();

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      Snackbar.show({
        text: t('pleaseLoginToAddToCart'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.warning,
        fontFamily: Fonts.REGULAR,
      });
      navigation.navigate('LoginScreen');
      return;
    }

    if (item) {
      const cartItem = {
        id: item.id,
        brandId: item.brandId,
        name: item.name,
        image: item.image,
        price: item.price,
        variantName: item.variants?.[0]?.product_size || '',
        variantId: 0,
        quantity: 1,
        discountType: discountType,
        discount: discountValue,
      };
      addProductToCart(cartItem);
      Snackbar.show({
        text: t('addedToCartSuccess'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.success,
        fontFamily: Fonts.REGULAR,
      });
    }
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

        {hasProductPromotion && (
          <View style={styles.promotionContainer}>
            <Icons.DISCOUNTTAG width={40} height={40} color={'red'} />
            <View style={styles.promotionWrapper}>
              <Text style={styles.value}>
                {discountValue}
                {discountType === 'percent' ? '%' : '$'}
              </Text>
              <Text style={styles.discountText}>OFF</Text>
            </View>
          </View>
        )}

        <IconButton
          style={[styles.heartButton, {backgroundColor: colors.lightGrey}]}
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

        <View style={styles.hero}>
          <Text style={[styles.name, {color: colors.text}]} numberOfLines={1}>
            {item.name}
          </Text>
          <PriceTag
            finalPrice={finalPrice}
            defaultPrice={hasProductPromotion ? item.price : null}
          />

          <View style={styles.heroFooter}>
            <RatingTag averageRating={item.rating} totalRating={item.rating} />
            <IconButton
              icon={<Icons.ADD color={colors.secondary} />}
              style={[
                styles.addToCart,
                {backgroundColor: colors.secondaryReversed},
              ]}
              onPress={handleAddToCart}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          styles.leftContainer,
          {
            backgroundColor:
              item.variants?.[0]?.product_qty == 0
                ? colors.error
                : colors.success,
          },
        ]}>
        <Text style={styles.left}>
          {item.variants?.[0]?.product_qty == 0
            ? t('soldOut')
            : `${item.variants?.[0]?.product_qty || ''} ${t('left')}`}
        </Text>
      </View>
    </Touchable>
  );
};

export default ProductItem;
