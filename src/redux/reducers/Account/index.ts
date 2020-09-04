import AccountController from './metadata';
import TYPES from '../../actions/AccountActions';
import { AsyncStorage } from 'react-native';

const initialState : AccountController.IAccount = {
  business : '',
  creationDate : new Date(),
  dateOfBirth : new Date(),
  direction : '',
  documentImage : '',
  lastName : '',
  name : ''
}

const reducer = (state = initialState,action) : AccountController.IAccount {
  switch(action.type){
    case TYPES.UPDATE_BUSINESS : return ({
      ...state,
      business : action.payload
    })
    default : return state
  }
}