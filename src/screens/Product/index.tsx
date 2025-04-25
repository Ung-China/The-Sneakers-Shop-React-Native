import {Alert, FlatList, Platform, ScrollView, Text, View} from 'react-native';
import styles from './style';
import {useTranslation} from 'react-i18next';
import {
  useCart,
  useFavorite,
  useNotification,
  useProductDetail,
  useRelatedProducts,
  useTheme,
} from '../../hooks';
import {
  AnimatedDotLoader,
  FlexibleSwiper,
  Footer,
  ItemSeparatorHeight,
  ProductItem,
  Section,
  Skeleton,
  Touchable,
  VariantItem,
} from '../../components';
import IconButton from '../../components/IconButton';
import {Fonts, Icons, Padding, Radius, Spacing} from '../../constants';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProductItemProps, StackParamList, VariantProps} from '../../types';
import PriceTag from '../../components/PriceTag';
import RatingTag from '../../components/RatingTag';
import React from 'react';
import {dummyProducts} from '../../models/Product';
import {variants} from '../../models/Variant';
import {ProductPromotionChecker} from '../../helpers';
import Snackbar from 'react-native-snackbar';

const ProductDetailScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const route = useRoute<RouteProp<StackParamList, 'ProductDetail'>>();
  const {id, brandId} = route.params;
  const {t} = useTranslation();
  const {colors} = useTheme();

  const {notifications} = useNotification();
  const {addProductToCart} = useCart();

  const {
    isLoading,
    productDetail,
    activeVariantId,
    price,
    setActiveVariantId,
    setSize,
    size,
    setPrice,
  } = useProductDetail(id);

  const {hasProductPromotion, finalPrice, discountType, discountValue} =
    ProductPromotionChecker({
      productId: id,
      defaultPrice: price,
      promotions: notifications,
      brandId: brandId,
    });

  const {products, isFetchingMoreProducts, fetchMoreProducts} =
    useRelatedProducts(brandId);

  const {isFavorite, toggleItemFavorite} = useFavorite();

  const {cartItemsCount} = useCart();

  const navigateBack = () => {
    return navigation.goBack();
  };

  const navigateToCart = () => {
    return navigation.navigate('Cart');
  };

  const handleAddToCart = () => {
    if (productDetail) {
      const cartItem = {
        id: id,
        brandId: brandId,
        name: productDetail.name,
        image: productDetail.image,
        price: productDetail.price,
        variantName: size,
        variantId: activeVariantId,
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

  const handleBuyNow = () => {
    if (productDetail) {
      const cartItem = {
        id: id,
        brandId: brandId,
        name: productDetail.name,
        image: productDetail.image,
        price: productDetail.price,
        variantName: size,
        variantId: activeVariantId,
        quantity: 1,
        discountType: discountType,
        discount: discountValue,
      };

      addProductToCart(cartItem);

      navigation.navigate('Delivery');

      Snackbar.show({
        text: t('addedToCartSuccess'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.success,
        fontFamily: Fonts.REGULAR,
      });
    }
  };

  const handlePressOnProduct = (id: number, brandId: number) => {
    navigation.replace('ProductDetail', {id, brandId});
  };

  const variantItem = ({
    item,
    index,
  }: {
    item: VariantProps['item'];
    index: number;
  }) => {
    return (
      <VariantItem
        onPress={() => {
          setActiveVariantId(index);
          setSize(item.size);
          setPrice(item.price);
        }}
        item={item}
        isActive={activeVariantId === index}
        containerStyle={{marginLeft: Spacing.DEFAULT}}
      />
    );
  };

  const productItem = ({
    item,
    index,
  }: {
    item: ProductItemProps['item'];
    index: number;
  }) => {
    return (
      <ProductItem
        item={item}
        notifications={notifications}
        onPress={() => handlePressOnProduct(item.id, item.brandId)}
        wrapperStyle={[
          styles.productWrapper,
          {marginRight: index % 2 === 0 ? Spacing.DEFAULT : 0},
        ]}
      />
    );
  };

  const handleScroll = ({nativeEvent}: any) => {
    const {layoutMeasurement, contentOffset, contentSize} = nativeEvent;

    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isCloseToBottom && !isFetchingMoreProducts) {
      fetchMoreProducts();
    }
  };

  const ProductItemSkeleton = ({index}: {index: number}) => {
    return (
      <Skeleton
        containerStyle={[
          styles.productWrapper,
          {
            marginRight: index % 2 === 0 ? Spacing.DEFAULT : 0,
            borderRadius: Radius.DEFAULT,
            height: 240,
            width: 80,
          },
        ]}
      />
    );
  };

  const variantSkeleton = () => {
    return (
      <Skeleton
        containerStyle={{
          height: 50,
          marginLeft: Spacing.DEFAULT,
          borderRadius: Radius.DEFAULT,
        }}
      />
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {productDetail && (
          <>
            {isLoading ? (
              <Skeleton
                containerStyle={{
                  height: 400,
                }}
              />
            ) : (
              <FlexibleSwiper
                imageUrlList={productDetail.images}
                imageStyle={[
                  styles.swiperImageStyle,
                  {backgroundColor: colors.white},
                ]}
                containerStyle={[
                  styles.swiperContainer,
                  {backgroundColor: colors.primary},
                ]}
                loadingImageStyle={[styles.swiperLoadingImageStyle]}
                iconSize={150}
                autoPlay={false}
                resizeMode="contain"
              />
            )}

            <View style={styles.body}>
              <View
                style={[
                  styles.container1,
                  {backgroundColor: colors.secondary},
                ]}>
                {isLoading ? (
                  <Skeleton
                    containerStyle={{
                      height: 25,
                      borderRadius: Radius.SMALL,
                    }}
                  />
                ) : (
                  <>
                    <Text style={[styles.name, {color: colors.text}]}>
                      {productDetail.name}
                    </Text>

                    <IconButton
                      onPress={() => toggleItemFavorite(productDetail)}
                      icon={
                        <Icons.HEART
                          color={
                            isFavorite(productDetail.id) ? 'none' : colors.text
                          }
                          fill={
                            isFavorite(productDetail.id) ? colors.text : 'none'
                          }
                        />
                      }
                      style={[
                        styles.heartContainer,
                        {backgroundColor: colors.primary},
                      ]}
                    />
                  </>
                )}

                {isLoading ? (
                  <Skeleton
                    containerStyle={{
                      height: 25,
                      borderRadius: Radius.SMALL,
                    }}
                  />
                ) : (
                  <View style={styles.priceContaner}>
                    <PriceTag
                      finalPrice={finalPrice}
                      defaultPrice={hasProductPromotion ? price : null}
                      priceStyle={styles.priceStyle}
                      defaultPriceStyle={styles.defaultPriceStyle}
                    />

                    {hasProductPromotion && (
                      <View
                        style={[
                          styles.discountContainer,
                          {backgroundColor: colors.primary},
                        ]}>
                        <Text style={[styles.discount, {color: colors.text}]}>
                          {discountValue}
                          {discountType === 'percent' ? '%' : '$'} OFF
                        </Text>
                      </View>
                    )}
                  </View>
                )}

                {isLoading ? (
                  <Skeleton
                    containerStyle={{
                      height: 20,
                      width: 20,
                      borderRadius: Radius.DEFAULT * 2,
                    }}
                  />
                ) : (
                  <RatingTag
                    averageRating={productDetail.rating}
                    totalRating={productDetail.rating}
                    averageRatingStyle={styles.averageRatingStyle}
                    totalRatingStyle={styles.totalRatingStyle}
                  />
                )}
              </View>

              <View
                style={[
                  styles.container2,
                  {backgroundColor: colors.secondary},
                ]}>
                {isLoading ? (
                  <>
                    <Skeleton
                      containerStyle={{
                        height: 20,
                        borderRadius: Radius.SMALL,
                      }}
                    />

                    <Skeleton
                      containerStyle={{
                        height: 40,
                        borderRadius: Radius.SMALL,
                      }}
                    />
                  </>
                ) : (
                  <>
                    <Text style={[styles.description, {color: colors.text}]}>
                      {t('description')}
                    </Text>
                    <Text
                      style={[styles.descriptionValue, {color: colors.text}]}>
                      {productDetail.description}
                    </Text>
                  </>
                )}
              </View>

              <View
                style={[
                  styles.container3,
                  {backgroundColor: colors.secondary},
                ]}>
                {isLoading ? (
                  <>
                    <Skeleton
                      containerStyle={{
                        height: 20,
                        width: 200,
                        marginTop: Spacing.DEFAULT,
                        marginHorizontal: Spacing.DEFAULT,
                        borderRadius: Radius.SMALL,
                      }}
                    />
                    <FlatList
                      data={variants}
                      renderItem={variantSkeleton}
                      numColumns={3}
                      scrollEnabled={false}
                      ItemSeparatorComponent={ItemSeparatorHeight}
                      keyExtractor={item => item.id.toString()}
                    />
                  </>
                ) : (
                  <>
                    <Text style={[styles.selectOption, {color: colors.text}]}>
                      {t('selectOption')}
                    </Text>
                    <FlatList
                      data={productDetail.variants}
                      renderItem={variantItem}
                      numColumns={3}
                      scrollEnabled={false}
                      ItemSeparatorComponent={ItemSeparatorHeight}
                      keyExtractor={item => item.id.toString()}
                    />
                  </>
                )}
              </View>
            </View>
          </>
        )}

        {!isLoading && (
          <>
            <IconButton
              onPress={navigateBack}
              icon={
                Platform.OS === 'ios' ? (
                  <Icons.ARROWLEFT
                    color={colors.black}
                    width={23}
                    height={23}
                  />
                ) : (
                  <Icons.LEFTARROWANDROID
                    color={colors.black}
                    width={30}
                    height={30}
                  />
                )
              }
              style={[styles.backContainer]}
            />

            <View style={[styles.cartContainer]}>
              <IconButton
                onPress={navigateToCart}
                icon={
                  <Icons.CART color={colors.black} width={25} height={25} />
                }
              />
              {cartItemsCount > 0 && (
                <View style={styles.qunatityContainer}>
                  <Text style={styles.quantity}>{cartItemsCount}</Text>
                </View>
              )}
            </View>
          </>
        )}

        {productDetail && (
          <>
            {isLoading ? (
              <>
                <Skeleton
                  containerStyle={{
                    height: 20,
                    width: 200,
                    marginTop: Spacing.DEFAULT,
                    marginHorizontal: Spacing.DEFAULT,
                    borderRadius: Radius.SMALL,
                  }}
                />
                <Section>
                  <FlatList
                    data={dummyProducts}
                    numColumns={2}
                    scrollEnabled={false}
                    renderItem={ProductItemSkeleton}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={ItemSeparatorHeight}
                    contentContainerStyle={[
                      styles.contentContainer,
                      {paddingBottom: Padding.BOTTOM * 2},
                    ]}
                    keyExtractor={item => item.id.toString()}
                  />
                </Section>
              </>
            ) : (
              <>
                <Section
                  title={t('relatedProduct')}
                  titleStyle={styles.titleStyle}>
                  <FlatList
                    data={products}
                    numColumns={2}
                    renderItem={productItem}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={ItemSeparatorHeight}
                    contentContainerStyle={styles.contentContainer}
                    keyExtractor={item => item.id.toString()}
                  />
                </Section>
                <AnimatedDotLoader
                  isLoading={isFetchingMoreProducts}
                  containerStyle={styles.fetchMoreLoaderContainer}
                />
              </>
            )}
          </>
        )}
      </ScrollView>

      {isLoading ? null : (
        <Footer
          safeAreaStyle={[
            styles.safeAreaStyle,
            {backgroundColor: colors.primary},
          ]}
          contentContainerStyle={[styles.footerContainer]}>
          <Touchable
            onPress={handleAddToCart}
            style={[
              styles.buttonAddToCart,
              {backgroundColor: colors.secondary},
            ]}>
            <Text style={[styles.addToCart, {color: colors.text}]}>
              {t('addToCart')}
            </Text>
          </Touchable>
          <Touchable
            onPress={handleBuyNow}
            style={[
              styles.buttonAddToCart,
              {backgroundColor: colors.primaryReversed},
            ]}>
            <Text style={[styles.addToCart, {color: colors.textReversed}]}>
              {t('buyNow')}
            </Text>
          </Touchable>
        </Footer>
      )}
    </View>
  );
};

export default ProductDetailScreen;
