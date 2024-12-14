import React from 'react';
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
import {useLocation, useSwiper, useTheme} from '../../hooks';
import {Icons, Padding} from '../../constants';
import {useTranslation} from 'react-i18next';
import {products} from '../../models/Product';
import {brands} from '../../models/Brand';
import {BrandProps, ProductItemProps, StackParamList} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const HomeScreen: React.FC = () => {
  const {colors} = useTheme();
  const {location} = useLocation();
  const {t} = useTranslation();
  const {imageList, bigImageList} = useSwiper();
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

  const handlePressToSeeMore = () => {
    return Alert.alert('Go to see more');
  };

  const handlePressOnProduct = () => {
    navigation.navigate('ProductDetail');
  };

  const handlePressOnBrand = () => {
    return Alert.alert('Go to product brand');
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.primary}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader item={location} />

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
          imageUrlList={imageList}
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
              onPress={handlePressToSeeMore}
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
        </Section>

        <FlexibleSwiper
          imageUrlList={bigImageList}
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
              onPress={handlePressToSeeMore}
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
    </SafeAreaView>
  );
};

export default HomeScreen;
