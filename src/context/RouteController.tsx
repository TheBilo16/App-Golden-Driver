import React, { createContext, FC, useState } from 'react';
import { TRouteState } from '../types';

//Interface
interface IContext {
  routeState : TRouteState,
  updateRouteState(value : TRouteState) : void
}

const RouteControllerContext = createContext<Partial<IContext>>({});

const RouteControllerProvider : FC = ({ children }) => {
  //States
  const [ routeState , setRouteState ] = useState<TRouteState>('auth');

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