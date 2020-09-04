import React, { } from 'react';
import { NavigationContainer } from '@react-navigation/native';

//REDUX
import { useSelector } from 'react-redux';

import RoutesAuth from './Auth';
import RoutesNotAuth from './NotAuth';

const RouterApp = () => {

  const { routerState } = useSelector(({ router }) => router);

  return (
    <NavigationContainer>
      { routerState === 'auth' ? <RoutesAuth /> : <RoutesNotAuth /> }
    </NavigationContainer>
  )
}


export default RouterApp;