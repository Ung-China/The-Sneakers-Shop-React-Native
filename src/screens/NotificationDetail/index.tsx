import React from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import styles from './style';
import {StackParamList} from '../../types';
import {AnimatedDotLoader, FlexibleSwiper} from '../../components';
import {useNotificationDetail, useTheme} from '../../hooks';

const NotificationDetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<StackParamList, 'NotificationDetail'>>();
  const {item} = route.params;

  const {isLoading, notificationDetail, fetchedNotificationDetail} =
    useNotificationDetail(item.id);

  const {colors} = useTheme();
  return (
    <>
      {isLoading ? (
        <AnimatedDotLoader
          isLoading={isLoading}
          containerStyle={[
            styles.loaderContainer,
            {backgroundColor: colors.primary},
          ]}
        />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              style={{opacity: 0}}
              refreshing={isLoading}
              onRefresh={fetchedNotificationDetail}
            />
          }
          style={[styles.container, {backgroundColor: colors.primary}]}>
          {notificationDetail && (
            <>
              <FlexibleSwiper
                imageUrlList={notificationDetail.images}
                imageStyle={styles.swiperImageStyle}
                containerStyle={styles.swiperContainer}
                loadingImageStyle={styles.swiperLoadingImageStyle}
                autoPlay={true}
                isShowPagination
                iconSize={150}
              />
              <View style={styles.contentContainer}>
                <Text style={[styles.title, {color: colors.text}]}>
                  {notificationDetail.title}
                </Text>
                <Text style={[styles.description, {color: colors.text}]}>
                  {notificationDetail.description}
                </Text>
              </View>
            </>
          )}
        </ScrollView>
      )}
    </>
  );
};

export default NotificationDetailScreen;
