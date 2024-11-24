import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AboutUsScreen,
  CartScreen,
  CurrentLocation,
  FavoriteScreen,
  LanguageScreen,
  NotificationDetailScreen,
  NotificationScreen,
  OrderHistoryScreen,
  SearchScreen,
} from '../../screens';
import {BottomTabNavigator} from '../BottomTabNavigator';
import {useTheme} from '../../hooks';
import {useTranslation} from 'react-i18next';
import {Fonts, FontSizes} from '../../constants';
import {StackParamList} from '../../types';

const Stack = createStackNavigator<StackParamList>();

export const StackNavigator = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.text,
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontFamily: Fonts.MEDIUM,
          fontSize: FontSizes.extraLarge,
        },
      }}>
      <Stack.Screen
        name="HomeTabs"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{title: 'Cart'}}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{title: 'Order History'}}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{title: t('notifications')}}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={{title: 'About Us'}}
      />
      <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{title: t('language')}}
      />
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{title: 'Favorite'}}
      />
      <Stack.Screen
        name="CurrentLocation"
        component={CurrentLocation}
        options={{title: 'CurrentLocation'}}
      />
      <Stack.Screen
        name="NotificationDetail"
        component={NotificationDetailScreen}
        options={{
          headerShadowVisible: false,
          presentation: 'modal',
          title: t('notificationDetail'),
        }}
      />
    </Stack.Navigator>
  );
};
