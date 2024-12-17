import React, {useEffect, useState} from 'react';
import {View, Text, Alert, Switch} from 'react-native';
import Touchable from '../Touchable';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../hooks';
import {ProfileMenuItemProps} from '../../types';

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({
  item,
  labelStyle,
  onPress,
  toggleTheme,
  isDarkMode,
}) => {
  const {colors} = useTheme();

  return (
    <Touchable onPress={() => onPress(item.screenName)}>
      <View style={[styles.container, {backgroundColor: colors.secondary}]}>
        <View style={styles.leadingContainer}>
          {item.prefixIcon &&
            React.createElement(item.prefixIcon, {
              color: colors.icon,
              width: 30,
            })}
          <Text
            style={[
              styles.label,
              {color: item.isDanger ? 'red' : colors.text},
              labelStyle,
            ]}>
            {item.label}
          </Text>
        </View>

        {item.isSwitch && (
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            thumbColor={isDarkMode ? '#FFFFFF' : '#FFFFFF'}
            style={{
              margin: -5,
            }}
          />
        )}

        {item.suffixIcon &&
          React.createElement(item.suffixIcon, {
            color: colors.icon,
          })}
      </View>
    </Touchable>
  );
};

export default ProfileMenuItem;
