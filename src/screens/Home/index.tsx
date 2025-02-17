import React, {useState} from 'react';
import {ScrollView, View, FlatList, RefreshControl, Text} from 'react-native';
import styles from './style';
import {
  AnimatedDotLoader,
  BrandItem,
  FlatButton,
  FlexibleInput,
  FlexibleSwiper,
  HomeHeader,
  ItemSeparatorWidth,
  ProductItem,
  Section,
  Skeleton,
} from '../../components';
import {
  useBrand,
  useLocation,
  useSeeMore,
  useShoesSlider,
  useSlider,
  useTheme,
} from '../../hooks';
import {Icons, Padding, Radius, Spacing} from '../../constants';
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

  const [isLoading, setIsLoading] = useState(false);

  const productItem = ({item}: {item: ProductItemProps['item']}) => {
    return (
      <ProductItem item={item} onPress={() => handlePressOnProduct(item.id)} />
    );
  };

  const productItemSkeleton = () => {
    return (
      <Skeleton
        containerStyle={{
          marginHorizontal: Spacing.DEFAULT,
          borderRadius: Radius.DEFAULT,
          height: 200,
        }}
      />
    );
  };

  const brandItem = ({item}: {item: BrandProps['item']}) => {
    return (
      <BrandItem item={item} onPress={() => handlePressOnBrand(item.id)} />
    );
  };

  const handlePressToSearch = () => {
    navigation.navigate('Search');
  };

  const handlePressToShopLocation = () => {
    navigation.navigate('ShopLocation');
  };

  const navigateToBrands = () => {
    navigation.navigate('Brand', {});
  };

  const handlePressOnBrand = (id: number) => {
    navigation.navigate('Brand', {id});
  };

  const handlePressOnProduct = (id: number) => {
    navigation.navigate('ProductDetail', {id});
  };

  const {sliders, fetchSliders, isLoading: isLoadingSliders} = useSlider();
  const {
    shoesSliders,
    fetchShoesSliders,
    isLoading: isLoadingShoesSliders,
  } = useShoesSlider();
  const {brands, fetchMoreBrands, fetchBrands} = useBrand();

  const {
    products: allProducts,
    fetchMoreProducts: fetchMoreAllProducts,
    fetchProducts: fetchAllProducts,
  } = useSeeMore(API_ENDPOINTS.GET_PRODUCTS);
  const {
    products: newArrivalProducts,
    fetchMoreProducts: fetchMoreNewArrivalProducts,
    fetchProducts: fetchNewArrivalProducts,
    isLoading: isLoadingNewProducts,
  } = useSeeMore(API_ENDPOINTS.GET_NEW_ARRIVAL_PRODUCTS);
  const {
    products: recommendedProducts,
    fetchMoreProducts: fetchMoreRecommendedProducts,
    fetchProducts: fetchNewRecommendedProducts,
  } = useSeeMore(API_ENDPOINTS.GET_RECOMMENDED_PRODUCTS);
  const {
    products: popularProducts,
    fetchMoreProducts: fetchMorePopularProducts,
    fetchProducts: fetchPopularProducts,
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

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      await fetchSliders();
      await fetchShoesSliders();
      await fetchAllProducts();
      await fetchNewArrivalProducts();
      await fetchNewRecommendedProducts();
      await fetchPopularProducts();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.primary,
          paddingTop: isLoading ? 0 : Padding.TOP,
        },
      ]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={handleRefresh}
            style={{opacity: 0}}
          />
        }>
        {isLoading && <AnimatedDotLoader isLoading={isLoading} />}
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

        {isLoadingSliders || isLoading ? (
          <Skeleton
            containerStyle={{
              marginHorizontal: Spacing.DEFAULT,
              borderRadius: Radius.DEFAULT,
              height: 200,
            }}
          />
        ) : (
          <FlexibleSwiper
            imageUrlList={sliders}
            imageStyle={styles.swiperImageStyle}
            containerStyle={styles.swiperContainer}
            loadingImageStyle={styles.swiperLoadingImageStyle}
            iconSize={150}
            autoPlay={true}
          />
        )}

        {isLoadingNewProducts && isLoading ? (
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
              renderItem={productItemSkeleton}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={ItemSeparatorWidth}
              contentContainerStyle={styles.productContentContainer}
              keyExtractor={item => item.id.toString()}
              onEndReached={fetchMoreNewArrivalProducts}
              onEndReachedThreshold={0.5}
            />
          </Section>
        ) : (
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
        )}

        {/* <Section
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
        </Section> */}

        {/* <Section
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
        </Section> */}

        {isLoadingShoesSliders || isLoading ? (
          <Skeleton
            containerStyle={{
              marginHorizontal: Spacing.DEFAULT,
              marginTop: Spacing.DEFAULT,
              borderRadius: Radius.DEFAULT,
              height: 300,
            }}
          />
        ) : (
          <FlexibleSwiper
            imageUrlList={shoesSliders}
            imageStyle={styles.bigSwiperImageStyle}
            containerStyle={styles.bigSwiperContainer}
            loadingImageStyle={styles.bigswiperLoadingImageStyle}
            iconSize={300}
            autoPlay={true}
          />
        )}

        {/* <Section
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
        </Section> */}

        {/* <Section
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
        </Section> */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
