import {RefreshControl, View} from 'react-native';
import {useFavorite, useTheme} from '../../hooks';
import styles from './style';
import {FlatList} from 'react-native-gesture-handler';
import {
  FavoriteItem,
  FavoriteItemSkeleton,
  ItemSeparatorHeight,
} from '../../components';
import {ProductItemProps, StackParamList} from '../../types';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {dummyProducts} from '../../models/Product';

const FavoriteScreen: React.FC = () => {
  const {colors} = useTheme();
  const {favorites, isLoading, refreshFavorites} = useFavorite();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const favoriteItem = ({item}: {item: ProductItemProps['item']}) => {
    return (
      <FavoriteItem item={item} onPress={() => handlePressOnProduct(item.id)} />
    );
  };

  const favoriteItemSkeleton = () => {
    return <FavoriteItemSkeleton />;
  };

  const handlePressOnProduct = (id: number) => {
    navigation.navigate('ProductDetail', {id});
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
      ) : (
        <FlatList
          data={favorites}
          renderItem={favoriteItem}
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
      )}
    </View>
  );
};

export default FavoriteScreen;
