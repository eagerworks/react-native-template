import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from '../RootNavigation';
import { MainStackParamList } from './MainStackParamsList';

import AuthStackNavigator from '@navigation/AuthStackNavigator';
import Welcome from '@screens/Welcome';

const Stack = createStackNavigator<MainStackParamList>();

const MainStackNavigator: React.FC<{}> = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStackNavigator} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
