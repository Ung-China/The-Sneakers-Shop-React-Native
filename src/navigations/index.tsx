import React from 'react';
import RootNavigator from './RootNavigation';
import useStartUp from '../hooks/useStartUp';
import {Alert} from 'react-native';
import {StartUpScreen} from '../screens';

const AppNavigation: React.FC = () => {
  const {isInitialized} = useStartUp();
  if (!isInitialized) {
    return <StartUpScreen />;
  }
  return <RootNavigator />;
};

export default AppNavigation;
