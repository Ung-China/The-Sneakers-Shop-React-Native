import {Alert, FlatList} from 'react-native';
import styles from './style';
import {useBrand, useTheme} from '../../hooks';
import {
  FlexibleInput,
  FlexibleTab,
  ItemSeparatorHeight,
  ProductItem,
} from '../../components';
import {ProductItemProps, StackParamList} from '../../types';
import {Icons, Spacing} from '../../constants';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {View} from 'react-native';
import {useEffect} from 'react';

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
  } = useBrand();

  useEffect(() => {
    if (id) {
      setActiveId(id);
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
        onPress={handlePressOnProduct}
        wrapperStyle={[
          styles.productWrapper,
          {marginRight: index % 2 === 0 ? Spacing.DEFAULT : 0},
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
        onTabChange={handleTabChange}>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={productItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparatorHeight}
          contentContainerStyle={styles.contentContainer}
          keyExtractor={item => item.id.toString()}
        />
      </FlexibleTab>
    </View>
  );
};

export default BrandScreen;
