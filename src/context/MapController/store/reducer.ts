import { MapContext } from "../namespaces"

const TYPES = {
  CHANGE_MAP_STATE_TYPE : 'change-map-state-type',
  CHANGE_BUSSTOP_INFORMATION : 'change-busstop-information',
  CHANGE_BUSSTOP_MODAL_CLOSE : 'change-busstop-modal-close',
  CHANGE_TRAVEL_STATE : 'change-travel-state',
}

const reducer = (state : MapContext.IStore, action : MapContext.IReducer) : MapContext.IStore => {
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

    default:
      return state;
  }
}

export {
  TYPES,
  reducer
}