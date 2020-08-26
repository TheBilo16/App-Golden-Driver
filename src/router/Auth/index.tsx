import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import Travels from '../../screens/Travels';
import Profile from '../../screens/Profile';
import Map from '../../screens/Map';

const Drawer = createDrawerNavigator();

const RoutesAuth = () => {
  return <Drawer.Navigator>
    <Drawer.Screen name='Travels' component={Travels} />
    <Drawer.Screen name='Map' component={Map} />
    <Drawer.Screen name='Profile' component={Profile} />
  </Drawer.Navigator>
}

export default RoutesAuth;