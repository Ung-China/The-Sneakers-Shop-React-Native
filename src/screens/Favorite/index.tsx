import {RefreshControl, View} from 'react-native';
import {useFavorite, useNotification, useTheme} from '../../hooks';
import styles from './style';
import {FlatList} from 'react-native-gesture-handler';
import {
  AnimatedDotLoader,
  FavoriteItem,
  FavoriteItemSkeleton,
  ItemSeparatorHeight,
  NotFound,
} from '../../components';
import {ProductItemProps, StackParamList} from '../../types';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {dummyProducts} from '../../models/Product';
import {useTranslation} from 'react-i18next';

const FavoriteScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const {
    favorites,
    isLoading,
    refreshFavorites,
    isFetchingMoreFavorites,
    fetchMoreFavorites,
  } = useFavorite();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const {notifications} = useNotification();

  const favoriteItem = ({item}: {item: ProductItemProps['item']}) => {
    return (
      <FavoriteItem
        item={item}
        onPress={() => handlePressOnProduct(item.id, item.brandId)}
        notifications={notifications}
      />
    );
  };

  const favoriteItemSkeleton = () => {
    return <FavoriteItemSkeleton />;
  };

  const handlePressOnProduct = (id: number, brandId: number) => {
    navigation.navigate('ProductDetail', {id, brandId});
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      {isLoading ? (
        <FlatList
          data={dummyProducts}
          renderItem={favoriteItemSkeleton}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparatorHeight}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl
              style={{opacity: 0}}
              refreshing={false}
              onRefresh={refreshFavorites}
            />
          }
        />
      ) : favorites.length === 0 && !isLoading ? (
        <NotFound
          isVisible={true}
          description={t('NoNotificationsFound')}
          containerStyle={styles.notFoundContainer}
        />
      ) : (
        <FlatList
          data={favorites}
          renderItem={favoriteItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparatorHeight}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={item => item.id.toString()}
          onEndReached={fetchMoreFavorites}
          onEndReachedThreshold={0.1}
          refreshControl={
            <RefreshControl
              style={{opacity: 0}}
              refreshing={false}
              onRefresh={refreshFavorites}
            />
          }
        />
      )}
      <AnimatedDotLoader
        isLoading={isFetchingMoreFavorites}
        containerStyle={styles.fetchMoreLoaderContainer}
      />
    </View>
  );
};

export default FavoriteScreen;
