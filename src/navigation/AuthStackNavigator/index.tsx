import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from './AuthStackParamsList';
import SignUp from '@screens/SignUp';
import SignIn from '@screens/SignIn';

const Stack = createStackNavigator<AuthStackParamList>();

const MainStackNavigator: React.FC<{}> = () => (
  <Stack.Navigator initialRouteName="SignIn">
    <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'SignIn' }} />
    <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'SignUp' }} />
  </Stack.Navigator>
);

export default MainStackNavigator;
