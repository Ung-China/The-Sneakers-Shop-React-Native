import {FlatList, RefreshControl, ScrollView, Text, View} from 'react-native';
import styles from './style';
import {useTranslation} from 'react-i18next';
import {useOrderDetail, useTheme} from '../../hooks';
import {
  CheckoutItem,
  FlexibleLabel,
  FlexibleStepIndicator,
  ItemSeparatorHeight,
  NotificationItemSkeleton,
  Section,
  Skeleton,
} from '../../components';
import {CheckoutItemProps} from '../../types/CheckoutItem';
import {cartItems} from '../../models/CartItem';
import {dateFormat, formatCurrency, GetTranslatedStatus} from '../../helpers';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackParamList} from '../../types';

import {Padding, Radius, Spacing} from '../../constants';

const OrderDetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<StackParamList, 'OrderHistoryDetail'>>();
  const {id} = route.params;
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {trackingSteps, isLoading, fetchedOrderDetail, orderDetail} =
    useOrderDetail(id);

  const checkoutItem = ({item}: {item: CheckoutItemProps['item']}) => {
    return <CheckoutItem item={item} />;
  };

  const productItemSkeleton = () => {
    return <NotificationItemSkeleton />;
  };

  return (
    <>
      {isLoading ? (
        <ScrollView
          style={[styles.container, {backgroundColor: colors.primary}]}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              style={{opacity: 0, height: 0}}
              refreshing={false}
              onRefresh={fetchedOrderDetail}
            />
          }>
          <View
            style={[
              styles.priceContainer,
              {
                backgroundColor: colors.secondary,
                paddingHorizontal: Padding.DEFAULT,
              },
            ]}>
            <View style={styles.skeletonContainer}>
              <Skeleton
                containerStyle={{
                  borderRadius: Radius.SMALL,
                  height: 16,
                  width: 50,
                }}
              />
              <Skeleton
                containerStyle={{
                  borderRadius: Radius.SMALL,
                  height: 16,
                  width: 50,
                }}
              />
            </View>
            <View style={styles.skeletonContainer}>
              <Skeleton
                containerStyle={{
                  borderRadius: Radius.SMALL,
                  height: 16,
                  width: 50,
                }}
              />
              <Skeleton
                containerStyle={{
                  borderRadius: Radius.SMALL,
                  height: 16,
                  width: 50,
                }}
              />
            </View>
            <View style={styles.skeletonContainer}>
              <Skeleton
                containerStyle={{
                  borderRadius: Radius.SMALL,
                  height: 16,
                  width: 50,
                }}
              />
              <Skeleton
                containerStyle={{
                  borderRadius: Radius.SMALL,
                  height: 16,
                  width: 50,
                }}
              />
            </View>
            <View style={styles.skeletonContainer}>
              <Skeleton
                containerStyle={{
                  borderRadius: Radius.SMALL,
                  height: 16,
                  width: 50,
                }}
              />
            </View>
          </View>

          <Skeleton
            containerStyle={{
              borderRadius: Radius.SMALL,
              height: 20,
              width: 100,
              margin: Spacing.DEFAULT,
            }}
          />
          <FlatList
            data={cartItems.slice(0, 4)}
            renderItem={productItemSkeleton}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorHeight}
            contentContainerStyle={styles.checkoutItemContentContainer}
            keyExtractor={item => item.id.toString()}
          />

          <View
            style={[
              styles.totalPriceContainer,
              {
                backgroundColor: colors.secondary,
                paddingHorizontal: Padding.DEFAULT,
              },
            ]}>
            <View style={styles.skeletonContainer}>
              <Skeleton
                containerStyle={{
                  borderRadius: Radius.SMALL,
                  height: 40,
                  width: 50,
                }}
              />
              <Skeleton
                containerStyle={{
                  borderRadius: Radius.SMALL,
                  height: 40,
                  width: 50,
                }}
              />
            </View>
            <Skeleton
              containerStyle={{
                borderRadius: Radius.SMALL,
                height: 40,
                width: 250,
              }}
            />

            <View style={styles.skeletonContainer}>
              <Skeleton
                containerStyle={{
                  borderRadius: Radius.SMALL,
                  height: 40,
                  width: 50,
                }}
              />
              <Skeleton
                containerStyle={{
                  borderRadius: Radius.SMALL,
                  height: 40,
                  width: 50,
                }}
              />
            </View>

            <Skeleton
              containerStyle={{
                borderRadius: Radius.SMALL,
                height: 10,
              }}
            />

            <Skeleton
              containerStyle={{
                borderRadius: Radius.SMALL,
                height: 15,
              }}
            />
          </View>
        </ScrollView>
      ) : (
        <ScrollView
          style={[styles.container, {backgroundColor: colors.primary}]}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              style={{opacity: 0, height: 0}}
              refreshing={false}
              onRefresh={fetchedOrderDetail}
            />
          }>
          <View
            style={[
              styles.priceContainer,
              {backgroundColor: colors.secondary},
            ]}>
            <FlexibleLabel
              label={t('yourOrderStatus')}
              value={GetTranslatedStatus(orderDetail?.orderStatus ?? null, t)}
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
              value={GetTranslatedStatus(orderDetail?.paymentStatus ?? null, t)}
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
              value={GetTranslatedStatus(orderDetail?.deliveryType ?? null, t)}
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
      )}
    </>
  );
};
export default OrderDetailScreen;
