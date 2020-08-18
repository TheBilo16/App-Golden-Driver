import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import NoAuth from '../screens/Main/NoAuth';

const Stack = createStackNavigator();


const RouterApp = () => {
  return <NavigationContainer>
    <Stack.Navigator headerMode='none' >
      <Stack.Screen name='Home' component={NoAuth} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default RouterApp;