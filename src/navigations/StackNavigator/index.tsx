import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AboutUsScreen,
  CartScreen,
  CheckoutScreen,
  CreateAccountScreen,
  CurrentLocation,
  DeliveryScreen,
  EditProfileScreen,
  FavoriteScreen,
  ForgotPasswordScreen,
  LanguageScreen,
  NotificationDetailScreen,
  NotificationScreen,
  OrderDetailScreen,
  OrderScreen,
  ProductDetailScreen,
  SearchScreen,
  SeeMoreScreen,
  ShopLocation,
  LoginScreen,
  OrderSuccessScreen,
} from '../../screens';
import {BottomTabNavigator} from '../BottomTabNavigator';
import {useTheme} from '../../hooks';
import {useTranslation} from 'react-i18next';
import {Fonts, FontSizes} from '../../constants';
import {StackParamList} from '../../types';
import AddressScreen from '../../screens/Address';

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
        component={OrderScreen}
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
        options={{title: t('favorite')}}
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
      <Stack.Screen
        name="OrderHistoryDetail"
        component={OrderDetailScreen}
        options={{
          title: t('yourOrder'),
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          title: t('editProfile'),
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          title: t('checkout'),
        }}
      />
      <Stack.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{
          title: t('delivery'),
        }}
      />
      <Stack.Screen
        name="Address"
        component={AddressScreen}
        options={{
          title: t('addAddress'),
        }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        options={{
          headerShadowVisible: false,
          presentation: 'modal',
          title: t('createAccount'),
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          headerShadowVisible: false,
          presentation: 'modal',
          title: t('resetPassword'),
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShadowVisible: false,
          presentation: 'modal',
          title: t('login'),
        }}
      />
      <Stack.Screen
        name="ShopLocation"
        component={ShopLocation}
        options={{
          headerShown: false,
          title: t('shopLocation'),
        }}
      />
      <Stack.Screen name="SeeMoreScreen" component={SeeMoreScreen} />
      <Stack.Screen
        name="OrderSuccessScreen"
        component={OrderSuccessScreen}
        options={{
          title: t('orderSuccess'),
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};
