import { createStore , combineReducers } from 'redux';
import mapReducer from './reducers/Map';
import configurationReducer from './reducers/Configuration';

const store = createStore(combineReducers({
  map : mapReducer,
  configuration : configurationReducer,
  //<key> : <reducer>  
}));

export default store;