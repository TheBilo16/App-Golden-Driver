import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RoutesAuth from './Auth';
import { RouteControllerContext } from '../context/RouteController';
import RoutesNotAuth from './NotAuth';

const RouterApp = () => {
  const { routeState } = useContext(RouteControllerContext);

  return <NavigationContainer>
    { routeState === 'auth' ? <RoutesAuth /> : <RoutesNotAuth /> }
  </NavigationContainer>
}

export default RouterApp;