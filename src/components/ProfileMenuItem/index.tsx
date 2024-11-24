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
}) => {
  const {theme, colors, setColorTheme} = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  const navigation = useNavigation();

  const handlePress = () => {
    if (item.screenName === 'SignOutModal') {
      return Alert.alert('Sign Out');
    }

    if (item.screenName === 'DeleteAccountModal') {
      return Alert.alert('Delete Account');
    }

    if (item.screenName !== 'Appearance') {
      navigation.navigate(item.screenName);
    }
  };

  const toggleTheme = (value: boolean) => {
    setIsDarkMode(value);
    setColorTheme(value ? 'dark' : 'light');
  };

  return (
    <Touchable
      onPress={
        item.screenName === 'Appearance'
          ? () => toggleTheme(!isDarkMode)
          : handlePress
      }>
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
