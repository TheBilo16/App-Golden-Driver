import React, { } from 'react';

import { NavigationContainer } from '@react-navigation/native';


//REDUX
import { useSelector } from 'react-redux';

import RoutesAuth from './Auth';
import RoutesNotAuth from './NotAuth';
import { AsyncStorage } from 'react-native';


const RouterApp = () => {

  const { routerState } = useSelector(({ router }) => router);  

  const checkSession = async () => {
    const choferID = await AsyncStorage.getItem('choferID');

    if ( choferID !== null ){
      console.log(routerState);
      console.log('true')
      return true
    }
    else {
      console.log(routerState);
      console.log('false')
      return false
    }
  }


  return (
    <NavigationContainer>
      { (checkSession() || routerState === 'auth') ? <RoutesAuth /> : <RoutesNotAuth /> }
    </NavigationContainer>
  )
}


export default RouterApp;