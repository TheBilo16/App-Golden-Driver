import { createStore , combineReducers } from 'redux';
import mapReducer from './reducers/Map';
import configurationReducer from './reducers/Configuration';
import travelReducer from './reducers/Travel';

const store = createStore(combineReducers({
  map : mapReducer,
  configuration : configurationReducer,
  travels : travelReducer
  //<key> : <reducer>  
}));

export default store;