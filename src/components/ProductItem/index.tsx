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
import {ProductPromotionChecker, StockChecker} from '../../helpers';
import {useTranslation} from 'react-i18next';
import Snackbar from 'react-native-snackbar';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import BottomSheet from '../BottomSheet';
import VariantBottomTab from '../VariantBottomTab';
import {useState} from 'react';

const ProductItem: React.FC<ProductItemProps> = ({
  item,
  wrapperStyle,
  onPress,
  notifications,
}) => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const {colors} = useTheme();

  const [size, setSize] = useState(item.variants[0].size);
  const [price, setPrice] = useState(item.variants[0].price);
  const [activeVariantId, setActiveVariantId] = useState<number | null>(0);
  const [quantity, setQuantity] = useState(item.variants[0].quantity);

  const {isFavorite, toggleItemFavorite} = useFavorite();

  const {
    addProductToCart,
    cartItems,
    bottomSheetVariantModalRef,
    toggleVariantSheet,
    toggleCloseVariantSheet,
    handleVariantSheetChanges,
  } = useCart();
  const {t} = useTranslation();

  const {
    hasProductPromotion,
    finalPrice,
    discountType,
    discountValue,
    variantsAfterCheckPromotion,
  } = ProductPromotionChecker({
    productId: item.id,
    defaultPrice: price,
    promotions: notifications,
    brandId: item.brandId,
    variants: item.variants,
  });

  const {isLoggedIn} = useUser();

  const handleAddToCart = () => {
    const {isOutOfStock, isCartExceedStock} = StockChecker({
      cartItems,
      productId: item.id,
      variantId: activeVariantId,
      stock: quantity,
    });

    if (!isLoggedIn) {
      toggleCloseVariantSheet();
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
    if (isOutOfStock) {
      Snackbar.show({
        text: t('outOfStock'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.error,
        fontFamily: Fonts.REGULAR,
      });
      return;
    }
    if (isCartExceedStock) {
      Snackbar.show({
        text: t('notEnoughStock'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.error,
        fontFamily: Fonts.REGULAR,
      });
      return;
    }
    if (item) {
      const cartItem = {
        id: item.id,
        brandId: item.brandId,
        name: item.name,
        image: item.image,
        price: price,
        variantName: size,
        variantId: activeVariantId,
        quantity: 1,
        discountType: discountType,
        discount: discountValue,
        stock: quantity,
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
    <>
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
              <RatingTag
                averageRating={item.rating}
                totalRating={item.rating}
              />
              <IconButton
                icon={<Icons.ADD color={colors.secondary} />}
                style={[
                  styles.addToCart,
                  {backgroundColor: colors.secondaryReversed},
                ]}
                onPress={toggleVariantSheet}
              />
            </View>
          </View>
        </View>
        {/* <View
          style={[
            styles.leftContainer,
            {
              backgroundColor:
                item.variants?.[0]?.quantity == 0
                  ? colors.error
                  : colors.success,
            },
          ]}>
          <Text style={styles.left}>
            {item.variants?.[0]?.quantity == 0
              ? t('soldOut')
              : `${item.variants?.[0]?.quantity || ''} ${t('left')}`}
          </Text>
        </View> */}
      </Touchable>

      <BottomSheet
        bottomSheetModalRef={bottomSheetVariantModalRef}
        onSheetChanges={handleVariantSheetChanges}
        handleSheetDismiss={() => {}}
        enableDynamicSizing={true}
        content={
          <VariantBottomTab
            item={variantsAfterCheckPromotion}
            onPressCancel={toggleCloseVariantSheet}
            onPressApply={handleAddToCart}
            setActiveVariantId={setActiveVariantId}
            setSize={setSize}
            setPrice={setPrice}
            setQuantity={setQuantity}
            activeVariantId={activeVariantId}
          />
        }
      />
    </>
  );
};

export default ProductItem;
