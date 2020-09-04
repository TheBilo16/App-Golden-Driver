import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import Profile from '../../screens/Profile';
import DrawerMenu from '../../components/DrawerMenu';
import StackMap from './StackMap';
import AboutUs from '../../screens/About-Us';
import QRLector from '../../screens/QRLector';
import Chat from '../../screens/Chat';

const Drawer = createDrawerNavigator();

//Redux
import { useSelector , shallowEqual } from 'react-redux';

const RoutesAuth = () => {
  const { isEnabledDrawerGesture } = useSelector(({ configuration }) => configuration, shallowEqual);

  return <Drawer.Navigator
    drawerContent={ props => <DrawerMenu {...props} />}
    openByDefault={false}
    screenOptions={{
      gestureEnabled : isEnabledDrawerGesture
    }}
  >
    <Drawer.Screen name='Travels' component={StackMap} />
    <Drawer.Screen name='QRLector' component={QRLector} />
    <Drawer.Screen name='Profile' component={Profile} />
    <Drawer.Screen name='About-Us' component={AboutUs} />
    <Drawer.Screen name='Chat' component={Chat} />
  </Drawer.Navigator>
}

export default RoutesAuth;