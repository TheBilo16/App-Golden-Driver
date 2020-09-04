import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import Travels from '../../../screens/Travels';
import Map from '../../../screens/Map';
import TravelDetail from '../../../screens/TravelDetail';

const Stack = createStackNavigator();

const StackMap = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Travels' component={Travels} />
    <Stack.Screen name='Travel-Detail' component={TravelDetail} />
    <Stack.Screen name='Map' component={Map} />
  </Stack.Navigator>
)

export default StackMap;