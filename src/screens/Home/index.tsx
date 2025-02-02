import React from 'react';
import {ScrollView, Alert, View, FlatList} from 'react-native';
import styles from './style';
import {
  BrandItem,
  FlatButton,
  FlexibleInput,
  FlexibleSwiper,
  HomeHeader,
  ItemSeparatorWidth,
  ProductItem,
  Section,
} from '../../components';
import {
  useBrand,
  useLocation,
  useProduct,
  useSeeMore,
  useShoesSlider,
  useSlider,
  useTheme,
} from '../../hooks';
import {Icons, Padding} from '../../constants';
import {useTranslation} from 'react-i18next';
import {BrandProps, ProductItemProps, StackParamList} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {API_ENDPOINTS} from '../../api';

const HomeScreen: React.FC = () => {
  const {colors} = useTheme();
  const {location} = useLocation();
  const {t} = useTranslation();

  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const productItem = ({item}: {item: ProductItemProps['item']}) => {
    return <ProductItem item={item} onPress={handlePressOnProduct} />;
  };

  const brandItem = ({item}: {item: BrandProps['item']}) => {
    return <BrandItem item={item} onPress={handlePressOnBrand} />;
  };

  const handlePressToSearch = () => {
    navigation.navigate('Search');
  };

  const handlePressToShopLocation = () => {
    navigation.navigate('ShopLocation');
  };

  const navigateToBrands = () => {
    navigation.navigate('Brand');
  };

  const handlePressOnProduct = () => {
    navigation.navigate('ProductDetail');
  };

  const handlePressOnBrand = () => {
    return Alert.alert('Go to product brand');
  };

  const {sliders} = useSlider();
  const {shoesSliders} = useShoesSlider();
  const {brands, fetchMoreBrands} = useBrand();

  const {products: allProducts, fetchMoreProducts: fetchMoreAllProducts} =
    useSeeMore(API_ENDPOINTS.GET_PRODUCTS);
  const {
    products: newArrivalProducts,
    fetchMoreProducts: fetchMoreNewArrivalProducts,
  } = useSeeMore(API_ENDPOINTS.GET_NEW_ARRIVAL_PRODUCTS);
  const {
    products: recommendedProducts,
    fetchMoreProducts: fetchMoreRecommendedProducts,
  } = useSeeMore(API_ENDPOINTS.GET_RECOMMENDED_PRODUCTS);
  const {
    products: popularProducts,
    fetchMoreProducts: fetchMorePopularProducts,
  } = useSeeMore(API_ENDPOINTS.GET_POPULAR_PRODUCTS);

  const handlePressToAllProducts = () => {
    navigation.navigate('SeeMoreScreen', {
      screenName: t('allProdcuts'),
      endPointName: API_ENDPOINTS.GET_PRODUCTS,
    });
  };

  const handlePressToNewArrivalProducts = () => {
    navigation.navigate('SeeMoreScreen', {
      screenName: t('newArrivalProducts'),
      endPointName: API_ENDPOINTS.GET_NEW_ARRIVAL_PRODUCTS,
    });
  };

  const handlePressToRecommendedProducts = () => {
    navigation.navigate('SeeMoreScreen', {
      screenName: t('recommendedProducts'),
      endPointName: API_ENDPOINTS.GET_RECOMMENDED_PRODUCTS,
    });
  };

  const handlePressToPopularProducts = () => {
    navigation.navigate('SeeMoreScreen', {
      screenName: t('popularProducts'),
      endPointName: API_ENDPOINTS.GET_POPULAR_PRODUCTS,
    });
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader
          item={location}
          handlePressToShopLocation={handlePressToShopLocation}
        />

        <FlexibleInput
          placeholder={t('searchProduct')}
          suffixIcon={<Icons.SEARCH color={colors.icon} />}
          contentContainerStyle={[
            styles.inputContainer,
            {backgroundColor: colors.secondary},
          ]}
          onPress={handlePressToSearch}
        />

        <FlexibleSwiper
          imageUrlList={sliders}
          imageStyle={styles.swiperImageStyle}
          containerStyle={styles.swiperContainer}
          loadingImageStyle={styles.swiperLoadingImageStyle}
          iconSize={150}
          autoPlay={true}
        />

        <Section
          title={t('newArrival')}
          actionButton={
            <FlatButton
              label={t('seeMore')}
              containerStyle={styles.sectionContainer}
              labelStyle={[
                styles.sectionActionButtonLabel,
                {color: colors.text},
              ]}
              onPress={handlePressToNewArrivalProducts}
            />
          }>
          <FlatList
            horizontal
            data={newArrivalProducts}
            renderItem={productItem}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorWidth}
            contentContainerStyle={styles.productContentContainer}
            keyExtractor={item => item.id.toString()}
            onEndReached={fetchMoreNewArrivalProducts}
            onEndReachedThreshold={0.5}
          />
        </Section>

        <Section
          title={t('shopByBrand')}
          actionButton={
            <FlatButton
              label={t('seeMore')}
              containerStyle={styles.sectionContainer}
              labelStyle={[
                styles.sectionActionButtonLabel,
                {color: colors.text},
              ]}
              onPress={navigateToBrands}
            />
          }>
          <FlatList
            horizontal
            data={brands}
            renderItem={brandItem}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorWidth}
            contentContainerStyle={styles.productContentContainer}
            keyExtractor={item => item.id.toString()}
            onEndReached={fetchMoreBrands}
            onEndReachedThreshold={0.5}
          />
        </Section>

        <Section
          title={t('recommendedForYou')}
          actionButton={
            <FlatButton
              label={t('seeMore')}
              containerStyle={styles.sectionContainer}
              labelStyle={[
                styles.sectionActionButtonLabel,
                {color: colors.text},
              ]}
              onPress={handlePressToRecommendedProducts}
            />
          }>
          <FlatList
            horizontal
            data={recommendedProducts}
            renderItem={productItem}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorWidth}
            contentContainerStyle={styles.productContentContainer}
            keyExtractor={item => item.id.toString()}
            onEndReached={fetchMoreRecommendedProducts}
            onEndReachedThreshold={0.5}
          />
        </Section>

        <FlexibleSwiper
          imageUrlList={shoesSliders}
          imageStyle={styles.bigSwiperImageStyle}
          containerStyle={styles.bigSwiperContainer}
          loadingImageStyle={styles.bigswiperLoadingImageStyle}
          iconSize={300}
          autoPlay={true}
        />

        <Section
          title={t('mostPopularShoes')}
          actionButton={
            <FlatButton
              label={t('seeMore')}
              containerStyle={styles.sectionContainer}
              labelStyle={[
                styles.sectionActionButtonLabel,
                {color: colors.text},
              ]}
              onPress={handlePressToPopularProducts}
            />
          }>
          <FlatList
            horizontal
            data={popularProducts}
            renderItem={productItem}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorWidth}
            contentContainerStyle={styles.productContentContainer}
            keyExtractor={item => item.id.toString()}
            onEndReached={fetchMorePopularProducts}
            onEndReachedThreshold={0.5}
          />
        </Section>

        <Section
          title={t('allProduct')}
          actionButton={
            <FlatButton
              label={t('seeMore')}
              containerStyle={styles.sectionContainer}
              labelStyle={[
                styles.sectionActionButtonLabel,
                {color: colors.text},
              ]}
              onPress={handlePressToAllProducts}
            />
          }>
          <FlatList
            horizontal
            data={allProducts}
            renderItem={productItem}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorWidth}
            keyExtractor={item => item.id.toString()}
            onEndReached={fetchMoreAllProducts}
            onEndReachedThreshold={0.5}
            contentContainerStyle={[
              styles.productContentContainer,
              {
                paddingBottom: Padding.DEFAULT,
              },
            ]}
          />
        </Section>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
