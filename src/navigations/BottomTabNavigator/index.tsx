import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BrandScreen,
  CartScreen,
  HomeScreen,
  OrderHistoryScreen,
  ProfileScreen,
} from '../../screens';
import {useTheme} from '../../hooks';
import {Fonts, FontSizes, Icons} from '../../constants';
import {StackParamList} from '../../types/StackTypes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {BottomTabParamList} from '../../types';

const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator<StackParamList>();

export const BottomTabNavigator = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
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
          headerShown: false,
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
          headerShown: false,
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
            <Icons.CART
              color={focused ? colors.icon : 'grey'}
              // fill={focused ? colors.icon : 'transparent'}
            />
          ),
          tabBarLabel: t('cart'),
        }}
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.HISTORY
              color={focused ? colors.icon : 'grey'}
              // fill={focused ? colors.icon : 'transparent'}
            />
          ),
          tabBarLabel: t('orderHistory'),
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
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
