import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import NoAuth from '../screens/Main/NoAuth';
import Profile from '../screens/Profile';
import Travels from '../screens/Travels';
import Map from '../screens/Map';

const Stack = createStackNavigator();


const RouterApp = () => {
  return <NavigationContainer>
    <Stack.Navigator headerMode='none' initialRouteName='Map' >
      <Stack.Screen name='Home' component={NoAuth} />
      <Stack.Screen name='Travels' component={Travels} />
      <Stack.Screen name='Map' component={Map} />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default RouterApp;