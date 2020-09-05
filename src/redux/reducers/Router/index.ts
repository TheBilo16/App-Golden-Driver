import RouterController from './metadata';
import TYPES from '../../actions/RouterActions';



const initialState : RouterController.IRouter = {
  routerState : 'no-auth',
}

const reducer = ( state = initialState , action ) : RouterController.IRouter => {
  switch(action.type){
    case TYPES.UPDATE_ROUTE_STATE : 
      return {
        ...state,
        routerState : action.payload
      }
    default : return state
  }

}

export default reducer;