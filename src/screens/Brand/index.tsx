import {Alert, FlatList} from 'react-native';
import styles from './style';
import {useBrand, useTheme} from '../../hooks';
import {
  AnimatedDotLoader,
  FlexibleInput,
  FlexibleTab,
  ItemSeparatorHeight,
  NotFound,
  ProductItem,
  Skeleton,
} from '../../components';
import {ProductItemProps, StackParamList} from '../../types';
import {Icons, Radius, Spacing} from '../../constants';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {View} from 'react-native';
import {useEffect} from 'react';
import {dummyProducts} from '../../models/Product';

const BrandScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const route = useRoute<RouteProp<StackParamList, 'ProductDetail'>>();
  const {id} = route.params || {};
  const {colors} = useTheme();
  const {t} = useTranslation();

  const {
    brands,
    products,
    activeId,
    setActiveId,
    fetchMoreBrands,
    fetchBrandById,
    isLoading,
    isLoadingBrands,
    setIsLoading,
    fetchMoreProducts,
    isFetchingMoreProducts,
  } = useBrand();

  console.log('CHECK IS LOADING', isLoading);
  console.log('CHECK ACTIVE ID', activeId);

  // useEffect(() => {
  //   setIsLoading;
  //   if (activeId) {
  //     fetchBrandById(activeId);
  //   }
  // }, [activeId]);

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

  const handleTabChange = (item: {id: number; name: string}) => {
    setActiveId(item.id);
    fetchBrandById(item.id);
  };

  const handlePressOnProduct = () => {
    return Alert.alert('Go to product detail');
  };

  const handlePressToSearch = () => {
    navigation.navigate('Search');
  };

  return (
    <View style={[styles.safeContainer, {backgroundColor: colors.primary}]}>
      <FlexibleInput
        placeholder={t('searchProduct')}
        suffixIcon={<Icons.SEARCH color={colors.icon} />}
        contentContainerStyle={[
          styles.inputContainer,
          {backgroundColor: colors.secondary},
        ]}
        onPress={handlePressToSearch}
      />
      <FlexibleTab
        data={brands}
        onEndReached={fetchMoreBrands}
        activeId={activeId}
        onTabChange={handleTabChange}
        isLoadingBrands={isLoadingBrands}>
        {isLoading ? (
          <FlatList
            data={dummyProducts}
            numColumns={2}
            renderItem={ProductItemSkeleton}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorHeight}
            contentContainerStyle={styles.contentContainer}
            keyExtractor={item => item.id.toString()}
          />
        ) : products.length === 0 ? (
          <NotFound isVisible={true} description={t('Noproductsfound')} />
        ) : (
          <FlatList
            data={products}
            numColumns={2}
            renderItem={productItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorHeight}
            contentContainerStyle={styles.contentContainer}
            keyExtractor={item => item.id.toString()}
            onEndReached={fetchMoreProducts}
            onEndReachedThreshold={0.5} // ✅ Adjust threshold to trigger only when user scrolls down
            onMomentumScrollBegin={() => {
              console.log(
                '[DEBUG] Scrolling started, enabling fetchMoreProducts',
              );
            }}
          />
        )}
      </FlexibleTab>
      <AnimatedDotLoader
        isLoading={isFetchingMoreProducts}
        containerStyle={styles.fetchMoreLoaderContainer}
      />
    </View>
  );
};

export default BrandScreen;
