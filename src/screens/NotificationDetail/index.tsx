import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import styles from './style';
import {StackParamList} from '../../types';
import {FlexibleSwiper} from '../../components';
import {useTheme} from '../../hooks';

const NotificationDetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<StackParamList, 'NotificationDetail'>>();
  const {item} = route.params;

  const {colors} = useTheme();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, {backgroundColor: colors.primary}]}>
      <FlexibleSwiper
        imageUrlList={item.galleries}
        imageStyle={styles.swiperImageStyle}
        containerStyle={styles.swiperContainer}
        loadingImageStyle={styles.swiperLoadingImageStyle}
        autoPlay={true}
        isShowPagination
        iconSize={150}
      />
      <View style={styles.contentContainer}>
        <Text style={[styles.title, {color: colors.text}]}>{item.title}</Text>
        <Text style={(styles.description, {color: colors.text})}>
          {item.description}
        </Text>
      </View>
    </ScrollView>
  );
};

export default NotificationDetailScreen;
