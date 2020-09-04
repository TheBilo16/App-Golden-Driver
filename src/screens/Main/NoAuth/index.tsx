import React , {useState,useEffect} from 'react';

import Login from './Login/';
import ValidationLogin from './ValidationLogin';

import { AsyncStorage } from 'react-native';


const NoAuth = () => {

  const [ existAuth , setExistAuth ] = useState(false);

  const comprobar = async() => {
    const validationAuth = await AsyncStorage.getItem('choferID');
    if ( validationAuth !== null ) setExistAuth(true)
  }

  useEffect(()=>{
    comprobar()
  },[existAuth])

  return (
    existAuth  ? <ValidationLogin /> : <Login />
  )
}

export default NoAuth;