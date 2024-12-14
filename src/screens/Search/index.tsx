import {Alert, FlatList, SafeAreaView, Text, View} from 'react-native';
import {useTheme} from '../../hooks';
import styles from './style';
import {products} from '../../models/Product';
import {
  FlexibleInput,
  HeaderComponent,
  ItemSeparatorHeight,
  ProductItem,
  Touchable,
} from '../../components';
import {ProductItemProps, StackParamList} from '../../types';
import {Icons, Spacing} from '../../constants';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useState} from 'react';

const SearchScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const [searchValue, setSearchValue] = useState<string>('');

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

  const handleCancelOrClearPress = () => {
    if (searchValue) {
      setSearchValue('');
    } else {
      navigation.goBack();
    }
  };

  const handlePressOnProduct = () => {
    return Alert.alert('Go to product detail');
  };

  return (
    <View style={[styles.safeContainer, {backgroundColor: colors.primary}]}>
      <HeaderComponent containerStyle={styles.headeStyle}>
        <View style={styles.headerContainer}>
          <FlexibleInput
            placeholder={t('searchProduct')}
            prefixIcon={<Icons.SEARCH color={colors.icon} />}
            containerStyle={[
              styles.inputContainer,
              {backgroundColor: colors.secondary},
            ]}
            contentContainerStyle={styles.noLabelContainer}
            editable={true}
            value={searchValue}
            onChangeText={setSearchValue}
          />
          <Touchable onPress={handleCancelOrClearPress}>
            <Text
              style={[
                styles.label,
                {color: searchValue ? 'red' : colors.text},
              ]}>
              {searchValue ? t('clear') : t('cancel')}
            </Text>
          </Touchable>
        </View>
      </HeaderComponent>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={productItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorHeight}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default SearchScreen;
