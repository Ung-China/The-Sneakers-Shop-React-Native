import {FlatList, ScrollView, Text, View} from 'react-native';
import styles from './style';
import {useTranslation} from 'react-i18next';
import {useOrderDetail, useTheme} from '../../hooks';
import {
  CheckoutItem,
  FlexibleLabel,
  FlexibleStepIndicator,
  ItemSeparatorHeight,
  Section,
} from '../../components';
import {CheckoutItemProps} from '../../types/CheckoutItem';
import {cartItems} from '../../models/CartItem';
import {dateFormat, formatCurrency} from '../../helpers';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackParamList} from '../../types';
import getTranslatedStatus from '../../helpers/Status';

const OrderDetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<StackParamList, 'OrderHistoryDetail'>>();
  const {id} = route.params;
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {trackingSteps, isLoading, fetchedOrderDetail, orderDetail} =
    useOrderDetail(id);

  console.log('CHECK ORDER DETAIL', orderDetail);

  const checkoutItem = ({item}: {item: CheckoutItemProps['item']}) => {
    return <CheckoutItem item={item} />;
  };

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.primary}]}
      showsVerticalScrollIndicator={false}>
      <View
        style={[styles.priceContainer, {backgroundColor: colors.secondary}]}>
        <FlexibleLabel
          label={t('yourOrderStatus')}
          value={getTranslatedStatus(orderDetail?.orderStatus ?? null, t)}
          labelStyle={[styles.priceLabel, {color: colors.text}]}
          valueStyle={[styles.priceValue, {color: colors.text}]}
          containerStyle={styles.priceContainerStyle}
        />
        <FlexibleLabel
          label={t('date')}
          value={dateFormat(orderDetail?.orderDate ?? '')}
          labelStyle={[styles.priceLabel, {color: colors.text}]}
          valueStyle={[styles.priceValue, {color: colors.text}]}
          containerStyle={styles.priceContainerStyle}
        />
        <FlexibleLabel
          label={t('orderNumber')}
          value={orderDetail?.orderNumber ?? ''}
          labelStyle={[styles.priceLabel, {color: colors.text}]}
          valueStyle={[styles.priceValue, {color: colors.text}]}
          containerStyle={styles.priceContainerStyle}
        />
        <FlexibleLabel
          label={t('paymentStatus')}
          value={getTranslatedStatus(orderDetail?.paymentStatus ?? null, t)}
          labelStyle={[styles.priceLabel, {color: colors.text}]}
          valueStyle={[styles.priceValue, {color: colors.text}]}
          containerStyle={styles.priceContainerStyle}
        />
      </View>

      <Section title={t('orderItem')} titleStyle={styles.titleStyle}>
        <FlatList
          data={orderDetail?.details}
          renderItem={checkoutItem}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparatorHeight}
          contentContainerStyle={styles.checkoutItemContentContainer}
          keyExtractor={item => item.id.toString()}
        />
      </Section>

      <View
        style={[
          styles.totalPriceContainer,
          {backgroundColor: colors.secondary},
        ]}>
        <FlexibleLabel
          label={t('amount')}
          value={formatCurrency(orderDetail?.total ?? 0)}
          showDollar={true}
          labelStyle={[styles.priceLabel, {color: colors.text}]}
          valueStyle={[styles.priceValue, {color: colors.text}]}
          containerStyle={styles.priceContainerStyle}
        />

        <FlexibleLabel
          label={t('deliveryType')}
          value={getTranslatedStatus(orderDetail?.deliveryType ?? null, t)}
          labelStyle={[styles.priceLabel, {color: colors.text}]}
          valueStyle={[styles.priceValue, {color: colors.text}]}
          containerStyle={styles.priceContainerStyle}
        />

        <FlexibleLabel
          label={t('deliveryFee')}
          value={formatCurrency(orderDetail?.deliveryFee ?? 0)}
          showDollar={true}
          labelStyle={[styles.priceLabel, {color: colors.text}]}
          valueStyle={[styles.priceValue, {color: colors.text}]}
          containerStyle={styles.priceContainerStyle}
        />

        <FlexibleLabel
          label={t('discount')}
          value={formatCurrency(orderDetail?.discount ?? 0)}
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
          value={formatCurrency(orderDetail?.finalTotal ?? 0)}
          showDollar={true}
          labelStyle={[styles.priceLabel, {color: colors.text}]}
          valueStyle={[styles.priceValue, {color: colors.text}]}
          containerStyle={styles.priceContainerStyle}
        />
      </View>

      <Section
        title={t('tracking')}
        titleStyle={styles.titleStyle}
        containerStyle={styles.trackingContainer}>
        <FlexibleStepIndicator steps={trackingSteps} />
      </Section>
    </ScrollView>
  );
};
export default OrderDetailScreen;
