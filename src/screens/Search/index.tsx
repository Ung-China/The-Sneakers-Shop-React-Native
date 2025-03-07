import {Alert, FlatList, Text, View} from 'react-native';
import {useSearchProduct, useTheme} from '../../hooks';
import styles from './style';
import {
  AnimatedDotLoader,
  FlexibleInput,
  ItemSeparatorHeight,
  NotFound,
  ProductItem,
  Touchable,
} from '../../components';
import {ProductItemProps, StackParamList} from '../../types';
import {Icons, Spacing} from '../../constants';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';

const SearchScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const {
    products,
    isLoading,
    fetchProducts,
    fetchMoreProducts,
    isFetchingMoreProducts,
    name,
    setName,
  } = useSearchProduct();

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
        onPress={() => handlePressOnProduct(item.id)}
        wrapperStyle={[
          styles.productWrapper,
          {marginRight: index % 2 === 0 ? Spacing.DEFAULT : 0},
        ]}
      />
    );
  };

  const handleCancelOrClearPress = () => {
    if (name) {
      setName('');
    } else {
      navigation.goBack();
    }
  };

  const handlePressOnProduct = (id: number) => {
    navigation.navigate('ProductDetail', {id});
  };
  return (
    <>
      <View style={[styles.safeContainer, {backgroundColor: colors.primary}]}>
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
            value={name}
            onChangeText={setName}
          />
          <Touchable onPress={handleCancelOrClearPress}>
            <Text style={[styles.label, {color: name ? 'red' : colors.text}]}>
              {name ? t('clear') : t('cancel')}
            </Text>
          </Touchable>
        </View>

        {isLoading ? (
          <AnimatedDotLoader
            isLoading={isLoading}
            containerStyle={[
              styles.loaderContainer,
              {backgroundColor: colors.primary},
            ]}
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
            onEndReachedThreshold={0.5}
          />
        )}
      </View>

      <AnimatedDotLoader
        isLoading={isFetchingMoreProducts}
        containerStyle={styles.fetchMoreLoaderContainer}
      />
    </>
  );
};

export default SearchScreen;
