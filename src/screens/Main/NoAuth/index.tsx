//React - React-Native
import React , {} from 'react';
import { AsyncStorage } from 'react-native';


import Login from './Login/';
import CheckLogin from './CheckLogin';





const NoAuth = () => {

  const checkDataChofer = async() => {
    const data = await AsyncStorage.getItem('dataChofer');
    console.log(data);
    if ( data !== null ) return true
    else return false
  }


  return (
    checkDataChofer() ? <Login /> : <CheckLogin />  
  )
}

export default NoAuth;