import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {useTheme} from '../../hooks';

const OrderHistoryScreen: React.FC = () => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}></View>
  );
};

export default OrderHistoryScreen;
