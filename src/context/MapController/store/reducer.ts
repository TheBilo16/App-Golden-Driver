import { IStore, IReducer } from "../interfaces"

const TYPES = {
  CHANGE_MAP_STATE_TYPE : 'change-map-state-type',
  CHANGE_BUSSTOP_INFORMATION : 'change-busstop-information'
}

const reducer = (state : IStore, action : IReducer) : IStore => {
  switch(action.type){
    case TYPES.CHANGE_MAP_STATE_TYPE:
      return {
        ...state,
        MapScreenState : action.payload
      }
    case TYPES.CHANGE_BUSSTOP_INFORMATION:
      return {
        ...state,
        BusStopInformation : action.payload
      }
    default:
      return state;
  }
}

export {
  TYPES,
  reducer
}