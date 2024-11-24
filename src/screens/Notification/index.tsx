import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '../../hooks';
import styles from './style';
import {FlatList} from 'react-native-gesture-handler';
import {notifications} from '../../models/Notification';
import {ItemSeparatorHeight, NotificationItem} from '../../components';
import {NotificationProps, StackParamList} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const NotificationScreen: React.FC = () => {
  const {colors} = useTheme();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const productItem = ({item}: {item: NotificationProps['item']}) => {
    return (
      <NotificationItem
        item={item}
        onPress={() => handlePressToNotificationDetail(item)}
      />
    );
  };

  const handlePressToNotificationDetail = (item: NotificationProps['item']) => {
    navigation.navigate('NotificationDetail', {item});
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <FlatList
        data={notifications}
        renderItem={productItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorHeight}
        contentContainerStyle={[styles.notificationContentContainer]}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default NotificationScreen;
