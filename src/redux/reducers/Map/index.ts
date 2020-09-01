import { MapController } from "./metadata";
import TYPES from "../../actions/ActionsMap";

const initialState : MapController.IStore = {
  travelState : 'pendient',
  mapScreen : {
    state : 'bottom-btn',
    modal : {
      busStopDetail : {
        name : '',
        ubication : '',
        date : '',
        detailState : 'in-process',
      },
      isActive : false
    }
  }
}

const reducer = (state = initialState , action) => {
  switch(action.type){
    case TYPES.CHANGE_TRAVEL_STATE:
      return {
        ...state,
        travelState : action.payload
      }

    case TYPES.CHANGE_MAP_STATE_TYPE:
      return {
        ...state,
        mapScreen : {
          ...state.mapScreen,
          state : action.payload
        }
      }

    case TYPES.CHANGE_BUSSTOP_INFORMATION:
      return {
        ...state,
        mapScreen : {
          ...state.mapScreen,
          modal : {
            busStopDetail : action.payload,
            isActive : true
          }
        }
      }
      
    case TYPES.CHANGE_BUSSTOP_MODAL_CLOSE:
      return {
        ...state,
        mapScreen : {
          ...state.mapScreen,
          modal : {
            ...state.mapScreen.modal,
            isActive : false
          }
        }
      }

    case TYPES.CHANGE_GLOBAL_STATE:
      return {
        ...initialState
      }

    default:
      return state;
  }
}

export default reducer;