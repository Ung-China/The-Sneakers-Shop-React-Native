import {useTranslation} from 'react-i18next';
import {FlatList, Text, View} from 'react-native';
import {
  useCalculateTotalPrice,
  useCart,
  useCheckout,
  useNotification,
  useTheme,
} from '../../hooks';
import {ScrollView} from 'react-native';
import styles from './style';
import React from 'react';
import {
  CartItem,
  FlexibleLabel,
  Footer,
  ItemSeparatorHeight,
  PaymentMethodItem,
  Touchable,
} from '../../components';
import FlexibleTouchable from '../../components/FlexibleTouchable';
import {CartItemProps, PaymentMethodProps, StackParamList} from '../../types';
import {formatCurrency} from '../../helpers';
import {Icons} from '../../constants';
import ImageCropPicker from 'react-native-image-crop-picker';
import {RouteProp, useRoute} from '@react-navigation/native';
import {dummyPaymentMethods} from '../../models/PaymentMethod';

const CheckoutScreen: React.FC = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {cartItems} = useCart();
  const {notifications} = useNotification();
  const route = useRoute<RouteProp<StackParamList, 'Checkout'>>();
  const {selectedOption, logistic, address} = route.params;
  const deliveryCost = selectedOption === 'pickup' ? 0 : 2.5;
  const {totalPrice, totalPriceWithDelivery, totalDiscount} =
    useCalculateTotalPrice(cartItems, notifications, deliveryCost);

  const {activePaymentMethod, setPaymentMethod, setActivePaymentMethod} =
    useCheckout();

  const cartItem = ({item}: {item: CartItemProps['item']}) => {
    return (
      <CartItem
        item={item}
        onPress={() => {}}
        onDelete={() => {}}
        onIncrease={() => {}}
        onDecrease={() => {}}
        isCheckout={true}
        notifications={notifications}
      />
    );
  };

  const optionItem = ({item}: {item: PaymentMethodProps['item']}) => {
    return (
      <PaymentMethodItem
        item={item}
        onPress={() => {
          setPaymentMethod(item.value);
          setActivePaymentMethod(item.id);
        }}
        isActive={activePaymentMethod === item.id}
      />
    );
  };

  const openImagePicker = async () => {
    try {
      const image = await ImageCropPicker.openPicker({
        width: 500,
        height: 500,
        cropping: true,
      });
      console.log('CHECK IMAGE', image.path);
    } catch (error) {
      console.log('[DEBUG] IMAGE_INPUT', error);
    }
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, {backgroundColor: colors.primary}]}>
        <FlatList
          data={cartItems}
          renderItem={cartItem}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          ItemSeparatorComponent={ItemSeparatorHeight}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={item => item.id.toString()}
        />

        <View
          style={[
            styles.totalPriceContainer,
            {backgroundColor: colors.secondary},
          ]}>
          <FlexibleLabel
            label={t('amount')}
            value={formatCurrency(totalPrice)}
            showDollar={true}
            labelStyle={[styles.priceLabel, {color: colors.text}]}
            valueStyle={[styles.priceValue, {color: colors.text}]}
            containerStyle={styles.priceContainerStyle}
          />

          <FlexibleLabel
            label={t('deliveryFee')}
            value={formatCurrency(deliveryCost)}
            showDollar={true}
            labelStyle={[styles.priceLabel, {color: colors.text}]}
            valueStyle={[styles.priceValue, {color: colors.text}]}
            containerStyle={styles.priceContainerStyle}
          />

          <FlexibleLabel
            label={t('discount')}
            value={formatCurrency(totalDiscount)}
            showDollar={true}
            labelStyle={[styles.priceLabel, {color: colors.text}]}
            valueStyle={[styles.priceValue, {color: colors.text}]}
            containerStyle={styles.priceContainerStyle}
          />

          <Text
            numberOfLines={1}
            ellipsizeMode="clip"
            style={{color: colors.grey}}>
            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </Text>

          <FlexibleLabel
            label={t('total')}
            value={formatCurrency(totalPriceWithDelivery)}
            showDollar={true}
            labelStyle={[styles.priceLabel, {color: colors.text}]}
            valueStyle={[styles.priceValue, {color: colors.text}]}
            containerStyle={styles.priceContainerStyle}
          />
        </View>

        {selectedOption === 'delivery' && (
          <View
            style={[
              styles.shippingContainer,
              {backgroundColor: colors.secondary},
            ]}>
            <View style={styles.shippngHeader}>
              <Text style={[styles.label, {color: colors.text}]}>
                {t('shippingAddress')}
              </Text>
            </View>
            <View style={styles.body}>
              <Text style={[styles.shippingLabel, {color: colors.text}]}>
                {address?.label}
              </Text>
              <Text style={[styles.shipping, {color: colors.text}]}>
                {address?.streetLine1}
              </Text>
              <Text style={[styles.shipping, {color: colors.text}]}>
                {address?.province} - {address?.phoneNumber}
              </Text>
            </View>
            <View style={[styles.separator, {backgroundColor: colors.grey}]} />
            <View style={styles.shippngHeader}>
              <Text style={[styles.label, {color: colors.text}]}>
                {t('logistic')}
              </Text>
            </View>
            <View style={styles.body}>
              <Text style={[styles.shippingLabel, {color: colors.text}]}>
                {logistic}
              </Text>
            </View>
          </View>
        )}

        <View style={styles.paymentContainer}>
          <View style={styles.labelContainer}>
            <Text style={[styles.mainLabel, {color: colors.text}]}>
              {t('choosePaymentMethod')}
            </Text>
            <Text style={[styles.subLabel, {color: colors.grey}]}>
              {t('pleaseCompletYourPaymentToFinish')}
            </Text>
            <View style={styles.optionContainer}>
              <FlatList
                data={dummyPaymentMethods}
                renderItem={optionItem}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                ItemSeparatorComponent={ItemSeparatorHeight}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          </View>
          <View style={styles.labelContainer}>
            <Text style={[styles.mainLabel, {color: colors.text}]}>
              {t('paySlip')}
            </Text>
            <Text style={[styles.subLabel, {color: colors.grey}]}>
              {t('pleaseUploadYourPaymentPaySlip')}
            </Text>
            <Touchable
              onPress={openImagePicker}
              style={[
                styles.uploadPayslip,
                {
                  backgroundColor: colors.secondary,
                  borderColor: colors.grey,
                },
              ]}>
              <View style={styles.iconContainer}>
                <Icons.UPLOADIMAGE width={50} height={50} color={colors.grey} />
                <Text style={[styles.uploadLabel, {color: colors.text}]}>
                  {t('clickHereToUpload')}
                </Text>
              </View>
            </Touchable>
          </View>
        </View>
      </ScrollView>

      <Footer
        safeAreaStyle={[
          styles.safeAreaStyle,
          {backgroundColor: colors.primary},
        ]}>
        <FlexibleTouchable
          label={t('payNow')}
          labelStyle={
            (styles.labelStyle,
            {color: colors.textReversed, textAlign: 'center'})
          }
          containerStyle={{backgroundColor: colors.primaryReversed}}
          onPress={() => {}}
        />
      </Footer>
    </>
  );
};
export default CheckoutScreen;
