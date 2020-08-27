import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import Travels from '../../screens/Travels';
import Profile from '../../screens/Profile';
import Map from '../../screens/Map';
import DrawerMenu from '../../components/DrawerMenu';

const Drawer = createDrawerNavigator();

const RoutesAuth = () => {
  return <Drawer.Navigator
    drawerContent={ props => <DrawerMenu {...props} />}
  >
    <Drawer.Screen name='Travels' component={Travels} />
    <Drawer.Screen name='Map' component={Map} />
    <Drawer.Screen name='Profile' component={Profile} />
  </Drawer.Navigator>
}

export default RoutesAuth;