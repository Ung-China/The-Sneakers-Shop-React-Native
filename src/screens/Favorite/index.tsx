import {useTranslation} from 'react-i18next';
import {Alert, Text, View} from 'react-native';
import {useTheme} from '../../hooks';
import styles from './style';
import {FlatList} from 'react-native-gesture-handler';
import {FavoriteItem, ItemSeparatorHeight} from '../../components';
import {products} from '../../models/Product';
import {ProductItemProps} from '../../types';

const FavoriteScreen: React.FC = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();

  const favoriteItem = ({item}: {item: ProductItemProps['item']}) => {
    return <FavoriteItem item={item} onPress={handlePressToProductDetail} />;
  };

  const handlePressToProductDetail = () => {
    return Alert.alert('Go to product detail');
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <FlatList
        data={products}
        renderItem={favoriteItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorHeight}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default FavoriteScreen;
