import React from 'react';
import {View, Text, SafeAreaView, FlatList, Alert} from 'react-native';
import styles from './style';
import {useTheme} from '../../hooks';
import {cartItems} from '../../models/CartItem';
import {CartItem, Footer, ItemSeparatorHeight, Section} from '../../components';
import {CartItemProps} from '../../types';
import FlexibleTouchable from '../../components/FlexibleTouchable';
import {useTranslation} from 'react-i18next';
import currencyFormat from '../../helpers/CurrencyFormat';

const CartScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();

  const cartItem = ({item}: {item: CartItemProps['item']}) => {
    return <CartItem item={item} onPress={handleOnPressToProductDetail} />;
  };

  const handleOnPressToCheckout = () => {
    return Alert.alert('Go to checkout');
  };

  const handleOnPressToProductDetail = () => {
    return Alert.alert('Go to product detail');
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <FlatList
        data={cartItems}
        renderItem={cartItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorHeight}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={item => item.id.toString()}
      />
      <Footer>
        <View style={styles.footerContainer}>
          <View style={styles.totalContainer}>
            <Text style={[styles.totalLabel, {color: colors.text}]}>
              {t('total')}
            </Text>
            <Text style={[styles.total, {color: colors.text}]}>
              ${currencyFormat(100)}
            </Text>
          </View>
          <FlexibleTouchable
            label={t('checkOut')}
            labelStyle={
              (styles.labelStyle,
              {color: colors.textReversed, textAlign: 'center'})
            }
            containerStyle={[
              styles.containerStyle,
              {backgroundColor: colors.primaryReversed},
            ]}
            onPress={handleOnPressToCheckout}
          />
        </View>
      </Footer>
    </View>
  );
};
export default CartScreen;
