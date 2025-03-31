import {useTranslation} from 'react-i18next';
import {FlatList, Text, View} from 'react-native';
import {useTheme} from '../../hooks';
import {ScrollView} from 'react-native';
import styles from './style';
import React from 'react';
import {
  CartItem,
  FlexibleLabel,
  Footer,
  ItemSeparatorHeight,
  OptionItem,
  Touchable,
} from '../../components';
import FlexibleTouchable from '../../components/FlexibleTouchable';
import {cartItems} from '../../models/CartItem';
import {CartItemProps} from '../../types';
import {formatCurrency} from '../../helpers';
import {Icons} from '../../constants';
import ImageCropPicker from 'react-native-image-crop-picker';

const CheckoutScreen: React.FC = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();

  const cartItem = ({item}: {item: CartItemProps['item']}) => {
    return <CartItem item={item} onPress={() => {}} isCheckout={true} />;
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
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, {backgroundColor: colors.primary}]}>
        <FlatList
          data={cartItems.slice(3)}
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
            value={formatCurrency(290)}
            showDollar={true}
            labelStyle={[styles.priceLabel, {color: colors.text}]}
            valueStyle={[styles.priceValue, {color: colors.text}]}
            containerStyle={styles.priceContainerStyle}
          />

          <FlexibleLabel
            label={t('deliveryType')}
            value={formatCurrency(2)}
            showDollar={true}
            labelStyle={[styles.priceLabel, {color: colors.text}]}
            valueStyle={[styles.priceValue, {color: colors.text}]}
            containerStyle={styles.priceContainerStyle}
          />

          <FlexibleLabel
            label={t('deliveryFee')}
            value={formatCurrency(2)}
            showDollar={true}
            labelStyle={[styles.priceLabel, {color: colors.text}]}
            valueStyle={[styles.priceValue, {color: colors.text}]}
            containerStyle={styles.priceContainerStyle}
          />

          <FlexibleLabel
            label={t('discount')}
            value={formatCurrency(20)}
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
            value={formatCurrency(300)}
            showDollar={true}
            labelStyle={[styles.priceLabel, {color: colors.text}]}
            valueStyle={[styles.priceValue, {color: colors.text}]}
            containerStyle={styles.priceContainerStyle}
          />
        </View>

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
              Home
            </Text>
            <Text style={[styles.shipping, {color: colors.text}]}>
              Siem Reap
            </Text>
            <Text style={[styles.shipping, {color: colors.text}]}>
              Siem Reap
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
              VET Express
            </Text>
          </View>
        </View>

        <View style={styles.paymentContainer}>
          <View style={styles.labelContainer}>
            <Text style={[styles.mainLabel, {color: colors.text}]}>
              {t('choosePaymentMethod')}
            </Text>
            <Text style={[styles.subLabel, {color: colors.grey}]}>
              {t('pleaseCompletYourPaymentToFinish')}
            </Text>
            <View style={styles.optionContainer}>
              <OptionItem
                title="ABA BANK"
                description="001 904 779 | Ing China"
                onPress={() => {}}
                prefixIcon={<Icons.ABABANK />}
                contentContainer={styles.optionContentContainer}
              />
              <OptionItem
                title="ABA BANK"
                description="001 904 779 | Ing China"
                onPress={() => {}}
                prefixIcon={<Icons.ACLEDABANK />}
                contentContainer={styles.optionContentContainer}
              />
              <OptionItem
                title="ABA BANK"
                description="001 904 779 | Ing China"
                onPress={() => {}}
                prefixIcon={<Icons.WINGBANK />}
                contentContainer={styles.optionContentContainer}
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
      </ScrollView> */}

      <View style={{flex: 1}}>
        <Text>Checkout Screen</Text>
      </View>
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
