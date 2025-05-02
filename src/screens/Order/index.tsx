import React from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import styles from './style';
import {useOrder, useTheme} from '../../hooks';
import {useTranslation} from 'react-i18next';

import {OrderItemProps, StackParamList} from '../../types';
import {
  AnimatedDotLoader,
  ItemSeparatorHeight,
  NotFound,
  OrderItem,
  OrderItemSkeleton,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {dummyOrders} from '../../models/Order';

const OrderScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const {colors} = useTheme();
  const {t} = useTranslation();

  const {
    isLoading,
    orders,
    isFetchingMoreOrders,
    fetchOrders,
    fetchMoreOrders,
  } = useOrder();

  const orderItem = ({item}: {item: OrderItemProps['item']}) => {
    return (
      <OrderItem onPress={() => handleOnPressOrder(item.id)} item={item} />
    );
  };

  const orderSkeleton = () => {
    return <OrderItemSkeleton />;
  };

  const handleOnPressOrder = (id: number) => {
    return navigation.navigate('OrderHistoryDetail', {id});
  };

  return (
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
          ListEmptyComponent={
            <NotFound isVisible={true} description={t('noOrdersHistory')} />
          }
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
          ListEmptyComponent={
            <NotFound isVisible={true} description={t('noOrdersHistory')} />
          }
        />
      )}
      <AnimatedDotLoader
        isLoading={isFetchingMoreOrders}
        containerStyle={styles.fetchMoreLoaderContainer}
      />
    </View>
  );
};

export default OrderScreen;
