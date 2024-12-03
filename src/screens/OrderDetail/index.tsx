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
import {formatCurrency} from '../../helpers';

const OrderDetailScreen: React.FC = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {trackingSteps} = useOrderDetail();

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
          value={'Pending'}
          labelStyle={[styles.priceLabel, {color: colors.text}]}
          valueStyle={[styles.priceValue, {color: colors.text}]}
          containerStyle={styles.priceContainerStyle}
        />
        <FlexibleLabel
          label={t('date')}
          value={'24 August 2024 12:00 AM'}
          labelStyle={[styles.priceLabel, {color: colors.text}]}
          valueStyle={[styles.priceValue, {color: colors.text}]}
          containerStyle={styles.priceContainerStyle}
        />
        <FlexibleLabel
          label={t('orderNumber')}
          value={'#00001'}
          labelStyle={[styles.priceLabel, {color: colors.text}]}
          valueStyle={[styles.priceValue, {color: colors.text}]}
          containerStyle={styles.priceContainerStyle}
        />
      </View>

      <Section title={t('orderItem')} titleStyle={styles.titleStyle}>
        <FlatList
          data={cartItems.slice(0, 2)}
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

        <Text numberOfLines={1} ellipsizeMode="clip">
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
