import React from 'react';
import RootNavigator from './RootNavigation';
import useStartUp from '../hooks/useStartUp';
import {StartUpScreen} from '../screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const AppNavigation: React.FC = () => {
  const {isInitialized} = useStartUp();
  if (!isInitialized) {
    return <StartUpScreen />;
  }
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <RootNavigator />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default AppNavigation;
