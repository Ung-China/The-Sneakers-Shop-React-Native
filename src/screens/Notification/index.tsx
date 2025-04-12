import React from 'react';
import {View, RefreshControl} from 'react-native';
import {useNotification, useTheme} from '../../hooks';
import styles from './style';
import {FlatList} from 'react-native-gesture-handler';

import {
  ItemSeparatorHeight,
  AnimatedDotLoader,
  NotificationItem,
  NotFound,
  NotificationItemSkeleton,
} from '../../components';
import {NotificationProps, StackParamList} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {dummyNotifications} from '../../models/Notification';

const NotificationScreen: React.FC = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();

  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const productItem = ({item}: {item: NotificationProps['item']}) => {
    return (
      <NotificationItem
        item={item}
        onPress={() => handlePressToNotificationDetail(item)}
      />
    );
  };

  const productItemSkeleton = () => {
    return <NotificationItemSkeleton />;
  };

  const handlePressToNotificationDetail = (item: NotificationProps['item']) => {
    navigation.navigate('NotificationDetail', {item});
  };

  const {
    notifications,
    isLoading,
    fetchNotifications,
    fetchMoreNotifications,
    isFetchingMoreNotifications,
  } = useNotification();

  console.log('CHECK NOTIFICATION', notifications);

  return (
    <>
      <View style={[styles.container, {backgroundColor: colors.primary}]}>
        {isLoading ? (
          <FlatList
            data={dummyNotifications}
            renderItem={productItemSkeleton}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorHeight}
            contentContainerStyle={styles.notificationContentContainer}
            keyExtractor={item => item.id.toString()}
            refreshControl={
              <RefreshControl
                style={{opacity: 0}}
                refreshing={false}
                onRefresh={fetchNotifications}
              />
            }
          />
        ) : notifications.length === 0 && !isLoading ? (
          <NotFound
            isVisible={true}
            description={t('NoNotificationFound')}
            containerStyle={styles.notFoundContainer}
          />
        ) : (
          <FlatList
            data={notifications}
            renderItem={productItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorHeight}
            contentContainerStyle={styles.notificationContentContainer}
            keyExtractor={item => item.id.toString()}
            onEndReached={fetchMoreNotifications}
            onEndReachedThreshold={0.5}
            refreshControl={
              <RefreshControl
                style={{opacity: 0}}
                refreshing={false}
                onRefresh={fetchNotifications}
              />
            }
          />
        )}
        <AnimatedDotLoader
          isLoading={isFetchingMoreNotifications}
          containerStyle={styles.fetchMoreLoaderContainer}
        />
      </View>
    </>
  );
};

export default NotificationScreen;
