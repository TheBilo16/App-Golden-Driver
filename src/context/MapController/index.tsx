import React, { createContext, FC, useReducer, Reducer } from 'react';
import { MapContext } from './namespaces';

//Reducers
import store from './store'
import { reducer } from './store/reducer';

const MapControllerContext = createContext<Partial<MapContext.IContext>>({});

const MapControllerProvider : FC = ({ children }) => {
  const [ state , dispatch ] = useReducer<Reducer<MapContext.IStore,MapContext.IReducer>>(reducer,store);

  return <MapControllerContext.Provider value={{ state , dispatch }}>
    { children }
  </MapControllerContext.Provider>
}

export {
  MapControllerContext,
  MapControllerProvider
}