import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import Profile from '../../screens/Profile';
import DrawerMenu from '../../components/DrawerMenu';
import StackMap from './StackMap';
import Nosotros from '../../screens/Nosotros';
import LectorQR from '../../screens/LectorQR';
import Chat from '../../screens/Chat';

const Drawer = createDrawerNavigator();

const RoutesAuth = () => {
  let isEnabledDrawerGesture = true; //Global State ...

  return <Drawer.Navigator
    drawerContent={ props => <DrawerMenu {...props} />}
    openByDefault={false}
    screenOptions={{
      gestureEnabled : isEnabledDrawerGesture
    }}
  >
    <Drawer.Screen name='Travels' component={StackMap} />
    <Drawer.Screen name='LectorQR' component={LectorQR} />
    <Drawer.Screen name='Profile' component={Profile} />
    <Drawer.Screen name='Nosotros' component={Nosotros} />
    <Drawer.Screen name='Chat' component={Chat} />
  </Drawer.Navigator>
}

export default RoutesAuth;