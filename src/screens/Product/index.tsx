import {
  Alert,
  FlatList,
  Platform,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './style';
import {useTranslation} from 'react-i18next';
import {useBrand, useProduct, useProductDetail, useTheme} from '../../hooks';
import {
  AnimatedDotLoader,
  FlexibleSwiper,
  Footer,
  ItemSeparatorHeight,
  ProductItem,
  Section,
  Touchable,
  VariantItem,
} from '../../components';
import IconButton from '../../components/IconButton';
import {Icons, Spacing} from '../../constants';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProductItemProps, StackParamList, VariantProps} from '../../types';
import PriceTag from '../../components/PriceTag';
import RatingTag from '../../components/RatingTag';
import React, {useEffect} from 'react';
const ProductDetailScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const route = useRoute<RouteProp<StackParamList, 'ProductDetail'>>();
  const {id} = route.params;
  const {t} = useTranslation();
  const {colors} = useTheme();

  const {
    isLoading,
    productDetail,
    fetchedProductDetail,
    activeVariant,
    price,
    size,
    setActiveVariant,
    setSize,
    setPrice,
  } = useProductDetail(id);

  const {
    products,
    fetchBrandById,
    isLoading: isLoadingRelatedProducts,
    fetchMoreProducts,
    isFetchingMoreProducts,
  } = useBrand();

  useEffect(() => {
    if (productDetail?.brandId) {
      fetchBrandById(productDetail.brandId);
    }
  }, [productDetail?.brandId]);

  // console.log('CHECK RELATED PRODUCT', products);

  const navigateBack = () => {
    return navigation.goBack();
  };

  const navigateToCart = () => {
    return navigation.navigate('Cart');
  };

  const toggleFavorite = () => {
    return Alert.alert('Toggle Favorite');
  };

  const addToCart = () => {
    return Alert.alert('Add to cart');
  };

  const goToCheckout = () => {
    return Alert.alert('Go to checkout');
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
          setActiveVariant(index);
          setSize(item.size);
          setPrice(item.price);
        }}
        item={item}
        isActive={activeVariant === index}
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
        onPress={handlePressOnProduct}
        wrapperStyle={[
          styles.productWrapper,
          {marginRight: index % 2 === 0 ? Spacing.DEFAULT : 0},
        ]}
      />
    );
  };

  const handlePressOnProduct = () => {
    return Alert.alert('Go to product detail');
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      {isLoading ? (
        <AnimatedDotLoader
          isLoading={isLoading}
          containerStyle={[
            styles.loaderContainer,
            {backgroundColor: colors.primary},
          ]}
        />
      ) : (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={fetchedProductDetail}
                style={{opacity: 0}}
              />
            }>
            {isLoading && <AnimatedDotLoader isLoading={isLoading} />}
            {productDetail && (
              <>
                {/* <FlexibleSwiper
                  imageUrlList={productDetail.images}
                  imageStyle={[
                    styles.swiperImageStyle,
                    {backgroundColor: colors.primary},
                  ]}
                  containerStyle={[
                    styles.swiperContainer,
                    {backgroundColor: colors.primary},
                  ]}
                  loadingImageStyle={[
                    styles.swiperLoadingImageStyle,
                    {backgroundColor: colors.primary},
                  ]}
                  iconSize={150}
                  autoPlay={false}
                  resizeMode="contain"
                /> */}

                {/* <View style={styles.body}>
                  <View
                    style={[
                      styles.container1,
                      {backgroundColor: colors.secondary},
                    ]}>
                    <IconButton
                      onPress={toggleFavorite}
                      icon={<Icons.HEART color={colors.text} />}
                      style={[
                        styles.heartContainer,
                        {backgroundColor: colors.primary},
                      ]}
                    />

                    <Text style={[styles.name, {color: colors.text}]}>
                      {productDetail.name}
                    </Text>

                    <View style={styles.priceContaner}>
                      <PriceTag
                        price={price}
                        promotion={'100'}
                        priceStyle={styles.priceStyle}
                        defaultPriceStyle={styles.defaultPriceStyle}
                      />

                      <View
                        style={[
                          styles.discountContainer,
                          {backgroundColor: colors.primary},
                        ]}>
                        <Text style={[styles.discount, {color: colors.text}]}>
                          5% OFF
                        </Text>
                      </View>
                    </View>

                    <RatingTag
                      averageRating={productDetail.rating}
                      totalRating={productDetail.rating}
                      averageRatingStyle={styles.averageRatingStyle}
                      totalRatingStyle={styles.totalRatingStyle}
                    />
                  </View>

                  <View
                    style={[
                      styles.container2,
                      {backgroundColor: colors.secondary},
                    ]}>
                    <Text style={[styles.description, {color: colors.text}]}>
                      {t('description')}
                    </Text>
                    <Text
                      style={[styles.descriptionValue, {color: colors.text}]}>
                      {productDetail.description}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.container3,
                      {backgroundColor: colors.secondary},
                    ]}>
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
                  </View>
                </View> */}
              </>
            )}

            <IconButton
              onPress={navigateBack}
              icon={
                Platform.OS === 'ios' ? (
                  <Icons.ARROWLEFT color={colors.text} width={23} height={23} />
                ) : (
                  <Icons.LEFTARROWANDROID
                    color={colors.text}
                    width={30}
                    height={30}
                  />
                )
              }
              style={[styles.backContainer]}
            />

            <IconButton
              onPress={navigateToCart}
              icon={<Icons.CART color={colors.text} width={25} height={25} />}
              style={[styles.cartContainer]}
            />

            <Section title={t('relatedProduct')} titleStyle={styles.titleStyle}>
              <FlatList
                data={products}
                numColumns={2}
                renderItem={productItem}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={ItemSeparatorHeight}
                contentContainerStyle={styles.contentContainer}
                keyExtractor={item => item.id.toString()}
                onEndReached={fetchMoreProducts}
                onEndReachedThreshold={0.9}
              />
            </Section>
            <AnimatedDotLoader
              isLoading={isFetchingMoreProducts}
              containerStyle={styles.fetchMoreLoaderContainer}
            />
          </ScrollView>

          {/* <Footer
            safeAreaStyle={[
              styles.safeAreaStyle,
              {backgroundColor: colors.primary},
            ]}
            contentContainerStyle={[styles.footerContainer]}>
            <Touchable
              onPress={addToCart}
              style={[
                styles.buttonAddToCart,
                {backgroundColor: colors.secondary},
              ]}>
              <Text style={[styles.addToCart, {color: colors.text}]}>
                {t('addToCart')}
              </Text>
            </Touchable>
            <Touchable
              onPress={goToCheckout}
              style={[
                styles.buttonAddToCart,
                {backgroundColor: colors.primaryReversed},
              ]}>
              <Text style={[styles.addToCart, {color: colors.textReversed}]}>
                {t('buyNow')}
              </Text>
            </Touchable>
          </Footer> */}
        </>
      )}
    </View>
  );
};

export default ProductDetailScreen;
