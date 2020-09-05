import { createStore , combineReducers } from 'redux';
import mapReducer from './reducers/Map';
import configurationReducer from './reducers/Configuration';
import travelReducer from './reducers/Travel';
import accountReducer from './reducers/Account';
import routerReducer from './reducers/Router';

const store = createStore(combineReducers({
  map : mapReducer,
  configuration : configurationReducer,
  travels : travelReducer,
  account : accountReducer, 
  router : routerReducer
  //<key> : <reducer>  
}));

export default store;