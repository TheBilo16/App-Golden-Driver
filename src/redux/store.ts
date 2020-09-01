import { createStore , combineReducers } from 'redux';
import mapReducer from './reducers/Map';

const store = createStore(combineReducers({
  map : mapReducer
  //<key> : <reducer>  
}));

export default store;