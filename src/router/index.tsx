import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import NoAuth from '../screens/Main/NoAuth';
import Profile from '../screens/Profile';
import Travels from '../screens/Travels';

const Stack = createStackNavigator();


const RouterApp = () => {
  return <NavigationContainer>
    <Stack.Navigator headerMode='none' initialRouteName='Profile' >
      <Stack.Screen name='Travels' component={Travels} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Home' component={NoAuth} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default RouterApp;