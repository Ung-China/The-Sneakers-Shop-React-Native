import {FlatList, View} from 'react-native';
import styles from './style';
import {
  useCustomSnackbar,
  useNotification,
  useSeeMore,
  useTheme,
} from '../../hooks';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ProductItemProps, StackParamList} from '../../types';
import {
  AnimatedDotLoader,
  CustomSnackbar,
  ItemSeparatorHeight,
  ProductItem,
  ProductItemSkeleton,
  Skeleton,
} from '../../components';
import {Radius, Spacing} from '../../constants';
import {RefreshControl} from 'react-native-gesture-handler';
import {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {dummyProducts} from '../../models/Product';

const SeeMoreScreen: React.FC = () => {
  const {colors} = useTheme();
  const route = useRoute<RouteProp<StackParamList, 'SeeMoreScreen'>>();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const {notifications} = useNotification();
  const {customSnackbarRef, type, message, showSnackbar} = useCustomSnackbar();

  const {screenName, endPointName} = route.params;

  const {
    products,
    isLoading,
    fetchProducts,
    fetchMoreProducts,
    isFetchingMoreProducts,
  } = useSeeMore(endPointName);

  const handlePressOnProduct = (id: number, brandId: number) => {
    navigation.navigate('ProductDetail', {id, brandId});
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
        onPress={() => handlePressOnProduct(item.id, item.brandId)}
        notifications={notifications}
        wrapperStyle={[
          styles.productWrapper,
          {marginRight: index % 2 === 0 ? Spacing.DEFAULT : 0},
        ]}
        showSnackbar={showSnackbar}
      />
    );
  };

  useEffect(() => {
    navigation.setOptions({title: screenName});
  }, []);

  const productItemSkeleton = ({index}: {index: number}) => {
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

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      {isLoading ? (
        <FlatList
          data={dummyProducts}
          numColumns={2}
          renderItem={productItemSkeleton}
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
              onRefresh={fetchProducts}
            />
          }
        />
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
              onRefresh={fetchProducts}
            />
          }
        />
      )}
      <CustomSnackbar
        customSnackbarRef={customSnackbarRef}
        type={type}
        text={message}
      />
      <AnimatedDotLoader
        isLoading={isFetchingMoreProducts}
        containerStyle={styles.fetchMoreLoaderContainer}
      />
    </View>
  );
};

export default SeeMoreScreen;
