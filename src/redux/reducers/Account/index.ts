import AccountController from './metadata';
import TYPES from '../../actions/AccountActions';

const initialState : AccountController.IAccount = {
  timeLogin : new Date(),
  choferID : '',
  lastName : '',
  name : ''
}

const reducer = (state = initialState,action) : AccountController.IAccount => {
  switch(action.type){
    case TYPES.UPDATE_DATA : return ({
      timeLogin : action.payload.timeLogin,
      choferID : action.payload.choferID,
      lastName : action.payload.lastName,
      name : action.payload.name
    })
    default : return state
  }
}

export default reducer;