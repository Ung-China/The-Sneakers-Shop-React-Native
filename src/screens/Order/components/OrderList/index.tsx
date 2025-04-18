import {Alert, FlatList, RefreshControl, View} from 'react-native';
import styles from './style';
import {
  AnimatedDotLoader,
  ItemSeparatorHeight,
  NotFound,
  NotificationItemSkeleton,
  OrderItem,
  Skeleton,
} from '../../../../components';
import {OrderItemProps, StackParamList} from '../../../../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useOrder, useTheme} from '../../../../hooks';
import {useTranslation} from 'react-i18next';
import {dummyOrders} from '../../../../models/Order';
import {Radius} from '../../../../constants';

const OrderList: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const {t} = useTranslation();
  const {colors} = useTheme();

  const {
    isLoading,
    orders,
    isFetchingMoreOrders,
    fetchOrders,
    fetchMoreOrders,
  } = useOrder();

  const orderItem = ({item}: {item: OrderItemProps['item']}) => {
    return <OrderItem onPress={handleOnPressOrder} item={item} />;
  };

  const orderSkeleton = () => {
    return (
      <Skeleton
        containerStyle={{
          borderRadius: Radius.DEFAULT,
          height: 150,
        }}
      />
    );
  };

  const handleOnPressOrder = () => {
    return navigation.navigate('OrderHistoryDetail');
  };

  return (
    <>
      <View style={[styles.container, {backgroundColor: colors.primary}]}>
        {isLoading ? (
          <FlatList
            data={dummyOrders}
            renderItem={orderSkeleton}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorHeight}
            contentContainerStyle={styles.orderItemContentContainer}
            keyExtractor={item => item.id.toString()}
            onEndReached={fetchMoreOrders}
            onEndReachedThreshold={0.5}
            refreshControl={
              <RefreshControl
                style={{opacity: 0}}
                refreshing={false}
                onRefresh={fetchMoreOrders}
              />
            }
          />
        ) : orders.length === 0 && !isLoading ? (
          <NotFound
            isVisible={true}
            description={t('NoNotificationFound')}
            containerStyle={styles.notFoundContainer}
          />
        ) : (
          <FlatList
            data={orders}
            renderItem={orderItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorHeight}
            contentContainerStyle={styles.orderItemContentContainer}
            keyExtractor={item => item.id.toString()}
            onEndReached={fetchMoreOrders}
            onEndReachedThreshold={0.5}
            refreshControl={
              <RefreshControl
                style={{opacity: 0}}
                refreshing={false}
                onRefresh={fetchOrders}
              />
            }
          />
        )}
        <AnimatedDotLoader
          isLoading={isFetchingMoreOrders}
          containerStyle={styles.fetchMoreLoaderContainer}
        />
      </View>
    </>
  );
};
export default OrderList;
