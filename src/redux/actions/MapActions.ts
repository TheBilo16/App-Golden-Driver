import { TTravelState, TStateScreenMap } from "../../types";
import Travels from "../../screens/Travels";

const TYPES = {
  CHANGE_MAP_STATE_TYPE : 'change-map-state-type',
  CHANGE_BUSSTOP_INFORMATION : 'change-busstop-information',
  CHANGE_BUSSTOP_MODAL_CLOSE : 'change-busstop-modal-close',
  CHANGE_TRAVEL_STATE : 'change-travel-state',
  CHANGE_GLOBAL_STATE : 'change-global-state',
  CHANGE_ALERTBOX_QUESTION : 'change-alertbox-question'
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

const changeAlertBoxState = (state : boolean) => ({
  type : TYPES.CHANGE_ALERTBOX_QUESTION,
  payload : state
})

export {
  changeBusStopInformation,
  changeTravelState,
  changeMapState,
  setInitialState,
  changeAlertBoxState
}

export default TYPES;