import React, { createContext, FC, useState , useEffect } from 'react';
import { TRouteState } from '../types';
import { AsyncStorage } from 'react-native';

//Interface
interface IContext {
  routeState : TRouteState,
  updateRouteState(value : TRouteState) : void
}

const RouteControllerContext = createContext<Partial<IContext>>({});

const RouteControllerProvider : FC = ({ children }) => {


  //States
  const [ routeState , setRouteState ] = useState<TRouteState>('no-auth');

  const verifiedStatusChofer = async () => {
    const status = await AsyncStorage.getItem('choferID');
    if (status !== null) setRouteState('auth') 
  }

  useEffect(()=>{
    verifiedStatusChofer();
  }, [routeState] )

  //Actions
  const updateRouteState = (value : TRouteState) : void => setRouteState(value);

  return <RouteControllerContext.Provider value={{
    routeState,
    updateRouteState
  }}>
    {children}
  </RouteControllerContext.Provider>
}

export {
  RouteControllerContext,
  RouteControllerProvider
}