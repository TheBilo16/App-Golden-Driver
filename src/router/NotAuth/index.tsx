import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NoAuth from '../../screens/Main/NoAuth';

const Stack = createStackNavigator();

const RoutesNotAuth = () => {
  return <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Home' component={NoAuth} />
  </Stack.Navigator>
}

export default RoutesNotAuth;