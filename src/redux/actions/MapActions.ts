import { TTravelState, TStateScreenMap } from "../../types";

const TYPES = {
  CHANGE_MAP_STATE_TYPE : 'change-map-state-type',
  CHANGE_BUSSTOP_INFORMATION : 'change-busstop-information',
  CHANGE_BUSSTOP_MODAL_CLOSE : 'change-busstop-modal-close',
  CHANGE_TRAVEL_STATE : 'change-travel-state',
  CHANGE_GLOBAL_STATE : 'change-global-state'
}

const changeBusStopInformation = (busStop) => ({
  type : TYPES.CHANGE_BUSSTOP_INFORMATION,
  payload : busStop
})

const changeTravelState = (travelState : TTravelState) => ({
  type : TYPES.CHANGE_TRAVEL_STATE,
  payload : travelState
})

const changeMapState = (type : TStateScreenMap) => ({
  type : TYPES.CHANGE_MAP_STATE_TYPE,
  payload : type
})

const setInitialState = () => ({
  type : TYPES.CHANGE_GLOBAL_STATE
})

export {
  changeBusStopInformation,
  changeTravelState,
  changeMapState,
  setInitialState
}

export default TYPES;