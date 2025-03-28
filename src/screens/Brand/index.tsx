import {Alert, FlatList, RefreshControl, Text} from 'react-native';
import styles from './style';
import {
  useBrand,
  useCustomSnackbar,
  useNotification,
  useTheme,
} from '../../hooks';
import {
  AnimatedDotLoader,
  CustomSnackbar,
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
import {dummyProducts} from '../../models/Product';
import {useEffect} from 'react';

const BrandScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const route = useRoute<RouteProp<StackParamList, 'ProductDetail'>>();
  const {id} = route.params || {};
  const {colors} = useTheme();
  const {t} = useTranslation();
  const {notifications, fetchNotifications} = useNotification();

  const {
    brands,
    products,
    brandId,
    setBrandId,
    fetchMoreBrands,
    isLoadingProduct,
    isLoadingBrands,
    isFetchingMoreProducts,
    fetchMoreProducts,
    setProductPage,
    refreshProducts,
    fetchBrandById,
  } = useBrand(id);

  const {customSnackbarRef, type, message, showSnackbar} = useCustomSnackbar();

  useEffect(() => {
    if (id) {
      setBrandId(id);
      fetchBrandById(id);
    }
  }, [id]);

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
        showSnackbar={showSnackbar}
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
    setBrandId(item.id);
    setProductPage(1);
  };

  const handlePressOnProduct = (id: number, brandId: number) => {
    navigation.navigate('ProductDetail', {id, brandId});
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
        activeId={brandId}
        onTabChange={handleTabChange}
        isLoadingBrands={isLoadingBrands}>
        {isLoadingProduct ? (
          <>
            <FlatList
              data={dummyProducts}
              numColumns={2}
              renderItem={ProductItemSkeleton}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={ItemSeparatorHeight}
              contentContainerStyle={styles.contentContainer}
              keyExtractor={item => item.id.toString()}
              refreshControl={
                <RefreshControl
                  style={{opacity: 0, paddingTop: -30}}
                  refreshing={false}
                  onRefresh={() => {
                    refreshProducts();
                    fetchNotifications();
                  }}
                  progressViewOffset={10}
                />
              }
            />
          </>
        ) : products.length === 0 && !isLoadingBrands && !isLoadingProduct ? (
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
            onEndReachedThreshold={0.5}
            refreshControl={
              <RefreshControl
                style={{opacity: 0}}
                refreshing={false}
                onRefresh={refreshProducts}
              />
            }
          />
        )}
      </FlexibleTab>
      <AnimatedDotLoader
        isLoading={isFetchingMoreProducts}
        containerStyle={styles.fetchMoreLoaderContainer}
      />
      <CustomSnackbar
        customSnackbarRef={customSnackbarRef}
        type={type}
        text={message}
      />
    </View>
  );
};

export default BrandScreen;
