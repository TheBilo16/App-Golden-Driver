import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Travels from '../../../screens/Travels';
import Map from '../../../screens/Map';

//Screens

const Stack = createStackNavigator();

const StackMap = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Travels' component={Travels} />
    <Stack.Screen name='Map' component={Map} />
  </Stack.Navigator>
)

export default StackMap;