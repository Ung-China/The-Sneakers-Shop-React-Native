import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BrandScreen,
  CartScreen,
  HomeScreen,
  OrderScreen,
  ProfileScreen,
} from '../../screens';
import {useCart, useTheme} from '../../hooks';
import {Fonts, FontSizes, Icons} from '../../constants';
import {StackParamList} from '../../types/StackTypes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {BottomTabParamList} from '../../types';
import {Text, View} from 'react-native';
import styles from './style';

const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator<StackParamList>();

export const BottomTabNavigator = () => {
  const {colors} = useTheme();
  const {cartItemsCount} = useCart();
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
        },
        tabBarActiveTintColor: colors.icon,
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          fontFamily: Fonts.REGULAR,
          fontSize: FontSizes.extraSmall,
        },
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: colors.text,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.HOME
              color={focused ? colors.icon : 'grey'}
              fill={focused ? colors.icon : 'transparent'}
            />
          ),
          tabBarLabel: t('home'),
        }}
      />
      <Tab.Screen
        name="Brand"
        component={BrandScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.BRAND
              color={focused ? colors.icon : 'grey'}
              fill={focused ? colors.icon : 'transparent'}
            />
          ),
          tabBarLabel: t('brand'),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View>
              <Icons.CART color={focused ? colors.icon : 'grey'} />
              {cartItemsCount > 0 && (
                <View style={styles.qunatityContainer}>
                  <Text style={styles.quantity}>{cartItemsCount}</Text>
                </View>
              )}
            </View>
          ),
          tabBarLabel: t('cart'),
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitle: t('cart'),
          headerTitleStyle: {
            fontFamily: Fonts.REGULAR,
            color: colors.text,
          },
        }}
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.HISTORY
              color={focused ? colors.icon : 'grey'}
              // fill={focused ? colors.icon : 'transparent'}
            />
          ),
          tabBarLabel: t('orderHistory'),
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitle: t('orderHistory'),
          headerTitleStyle: {
            fontFamily: Fonts.REGULAR,
            color: colors.text,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.PROFILE
              color={focused ? colors.icon : 'grey'}
              fill={focused ? colors.icon : 'transparent'}
            />
          ),
          tabBarLabel: t('profile'),
        }}
      />
    </Tab.Navigator>
  );
};
