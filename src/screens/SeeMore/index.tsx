import {FlatList, View} from 'react-native';
import styles from './style';
import {useSeeMore, useTheme} from '../../hooks';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ProductItemProps, StackParamList} from '../../types';
import {
  AnimatedDotLoader,
  ItemSeparatorHeight,
  ProductItem,
} from '../../components';
import {Spacing} from '../../constants';
import {RefreshControl} from 'react-native-gesture-handler';
import {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

const SeeMoreScreen: React.FC = () => {
  const {colors} = useTheme();
  const route = useRoute<RouteProp<StackParamList, 'SeeMoreScreen'>>();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const {screenName, endPointName} = route.params;

  const {
    products,
    isLoading,
    fetchProducts,
    fetchMoreProducts,
    isFetchingMoreProducts,
  } = useSeeMore(endPointName);

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
        onPress={() => {}}
        wrapperStyle={[
          styles.productWrapper,
          {marginRight: index % 2 === 0 ? Spacing.DEFAULT : 0},
        ]}
      />
    );
  };

  useEffect(() => {
    navigation.setOptions({title: screenName});
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      {isLoading ? (
        <AnimatedDotLoader
          isLoading={isLoading}
          containerStyle={styles.loaderContainer}
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
              refreshing={isLoading}
              onRefresh={fetchProducts}
            />
          }
        />
      )}
      <AnimatedDotLoader
        isLoading={isFetchingMoreProducts}
        containerStyle={styles.fetchMoreLoaderContainer}
      />
    </View>
  );
};

export default SeeMoreScreen;
