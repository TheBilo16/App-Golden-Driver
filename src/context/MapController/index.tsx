import React, { createContext, FC, useReducer, Reducer } from 'react';
import { IContext, IStore, IReducer } from './interfaces';

//Reducers
import store from './store'
import { reducer } from './store/reducer';

const MapControllerContext = createContext<Partial<IContext>>({});

const MapControllerProvider : FC = ({ children }) => {
  const [ state , dispatch ] = useReducer<Reducer<IStore,IReducer>>(reducer,store);

  return <MapControllerContext.Provider value={{ state , dispatch }}>
    { children }
  </MapControllerContext.Provider>
}

export {
  MapControllerContext,
  MapControllerProvider
}