import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import AppProvider from './src/hooks';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle='dark-content'
        translucent={true}
        backgroundColor={'transparent'}
      />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
}
