import {Alert, FlatList, SafeAreaView} from 'react-native';
import styles from './style';
import {useTheme} from '../../hooks';
import {
  FlexibleInput,
  FlexibleTab,
  ItemSeparatorHeight,
  ProductItem,
} from '../../components';
import {brands} from '../../models/Brand';
import {products} from '../../models/Product';
import {ProductItemProps, StackParamList} from '../../types';
import {Icons, Spacing} from '../../constants';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

const BrandScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

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
        onTabChange={item => console.log('On Tab Brand:', item.name)}>
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
