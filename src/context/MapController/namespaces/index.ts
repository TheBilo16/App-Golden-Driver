import { TStateScreenMap, TTravelState, TBusStopState } from "../../../types";
import { Dispatch } from "react";

namespace MapContext {
  export interface IStore {
    travelState : TTravelState,
    mapScreen : {
      state : TStateScreenMap;
      modal : {
        busStopDetail : IBusStopDetail;
        isActive : boolean;
      }
    }
  }

  export interface IBusStopDetail {
    name : string;
    ubication: string;
    detailState : TBusStopState;
    date : string;
  }
  
  export interface IReducer {
    type : string,
    payload : any
  }
  
  export interface IContext {
    state : IStore,
    dispatch : Dispatch<IReducer>
  }
}

export {
  MapContext
}