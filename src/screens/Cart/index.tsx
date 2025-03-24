import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './style';
import {useCart, useNotification, useTheme} from '../../hooks';
import {
  CartItem,
  CustomAlert,
  Footer,
  ItemSeparatorHeight,
  NotFound,
} from '../../components';
import {CartItemProps, StackParamList} from '../../types';
import FlexibleTouchable from '../../components/FlexibleTouchable';
import {useTranslation} from 'react-i18next';
import currencyFormat from '../../helpers/CurrencyFormat';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const CartScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const {notifications} = useNotification();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const {
    cartItems,
    increaseProductQuantity,
    decreaseProductQuantity,
    handleDeletePress,
    confirmDelete,
    isAlertVisible,
    setAlertVisible,
  } = useCart();

  const cartItem = ({item}: {item: CartItemProps['item']}) => {
    return (
      <CartItem
        item={item}
        onPress={() => handleOnPressToProductDetail(item.id, item.brandId)}
        onDelete={() => handleDeletePress(item.id, item.variantId)}
        onIncrease={() => increaseProductQuantity(item.id, item.variantId)}
        onDecrease={() => decreaseProductQuantity(item.id, item.variantId)}
        notifications={notifications}
      />
    );
  };

  const handleOnPressToCheckout = () => {
    navigation.navigate('Delivery');
  };

  const handleOnPressToProductDetail = (id: number, brandId: number) => {
    navigation.navigate('ProductDetail', {id, brandId});
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      {cartItems.length === 0 ? (
        <NotFound
          isVisible={true}
          description={t('NoCartItemFound')}
          containerStyle={styles.notFoundContainer}
        />
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={cartItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorHeight}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={item => `${item.id}-${item.variantId}`}
          />
          <Footer
            safeAreaStyle={[
              styles.footerSafe,
              {backgroundColor: colors.primary},
            ]}
            contentContainerStyle={styles.footerContainer}>
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
          </Footer>
          <CustomAlert
            isVisible={isAlertVisible}
            title={t('removeproducttitle')}
            description={t('removeproductdescription')}
            onPress={confirmDelete}
            onClose={() => setAlertVisible(false)}
          />
        </>
      )}
    </View>
  );
};
export default CartScreen;
