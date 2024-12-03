import {Alert, FlatList} from 'react-native';
import styles from './style';
import {ItemSeparatorHeight, OrderItem} from '../../../../components';
import {orders} from '../../../../models/Order';
import {OrderItemProps, StackParamList} from '../../../../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const OrderList: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const orderItem = ({item}: {item: OrderItemProps['item']}) => {
    return <OrderItem onPress={handleOnPressOrder} item={item} />;
  };

  const handleOnPressOrder = () => {
    return navigation.navigate('OrderHistoryDetail');
  };

  return (
    <FlatList
      data={orders}
      renderItem={orderItem}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={ItemSeparatorHeight}
      contentContainerStyle={styles.orderItemContentContainer}
      keyExtractor={item => item.id.toString()}
    />
  );
};
export default OrderList;
