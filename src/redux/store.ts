import { createStore , combineReducers } from 'redux';

//Reducers
import mapReducer from './reducers/Map';
import configurationReducer from './reducers/Configuration';
import travelReducer from './reducers/Travel';
import routerReducer from './reducers/Router';
import chatReducer from './reducers/Chat';

const store = createStore(combineReducers({
  chat : chatReducer,
  map : mapReducer,
  configuration : configurationReducer,
  travels : travelReducer,
  router : routerReducer
  //<key> : <reducer>  
}));

export default store;