import React, {useEffect} from 'react';
import {
  ScrollView,
  SafeAreaView,
  Alert,
  View,
  FlatList,
  Text,
} from 'react-native';
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
  Touchable,
} from '../../components';
import {
  useBrand,
  useLocation,
  useProduct,
  useShoesSlider,
  useSlider,
  useTheme,
} from '../../hooks';
import {Icons, Padding} from '../../constants';
import {useTranslation} from 'react-i18next';
import {producttestes} from '../../models/ProductTest';
import {brands} from '../../models/Brand';
import {BrandProps, ProductItemProps, StackParamList} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

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
  const {products, fetchMoreProducts} = useProduct();

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

        {/* <Section
          title={t('newArrival')}
          actionButton={
            <FlatButton
              label={t('seeMore')}
              containerStyle={styles.sectionContainer}
              labelStyle={[
                styles.sectionActionButtonLabel,
                {color: colors.text},
              ]}
              onPress={handlePressToSeeMore}
            />
          }>
          <FlatList
            horizontal
            data={products}
            renderItem={productItem}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorWidth}
            contentContainerStyle={styles.productContentContainer}
            keyExtractor={item => item.id.toString()}
          />
        </Section> */}

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
              onPress={handlePressToSeeMore}
            />
          }>
          <FlatList
            horizontal
            data={products}
            renderItem={productItem}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorWidth}
            contentContainerStyle={styles.productContentContainer}
            keyExtractor={item => item.id.toString()}
          />
        </Section> */}

        <FlexibleSwiper
          imageUrlList={shoesSliders}
          imageStyle={styles.bigSwiperImageStyle}
          containerStyle={styles.bigSwiperContainer}
          loadingImageStyle={styles.bigswiperLoadingImageStyle}
          iconSize={300}
          autoPlay={true}
        />

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
              onPress={handlePressToSeeMore}
            />
          }>
          <FlatList
            horizontal
            data={products}
            renderItem={productItem}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorWidth}
            contentContainerStyle={styles.productContentContainer}
            keyExtractor={item => item.id.toString()}
          />
        </Section> */}

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
              onPress={navigateToBrands}
            />
          }>
          <FlatList
            horizontal
            data={products}
            renderItem={productItem}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorWidth}
            contentContainerStyle={[
              styles.productContentContainer,
              {
                paddingBottom: Padding.DEFAULT,
              },
            ]}
            keyExtractor={item => item.id.toString()}
          />
        </Section>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
