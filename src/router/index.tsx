import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RoutesAuth from './Auth';

const RouterApp = () => {
  return <NavigationContainer>
    <RoutesAuth />
  </NavigationContainer>
}

export default RouterApp;