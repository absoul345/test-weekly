import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigation } from '../../navigation';

export const Main = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
