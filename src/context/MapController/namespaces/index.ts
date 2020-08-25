import { TStateScreenMap } from "../../../types";
import { Dispatch } from "react";

namespace MapContext {
  export interface IStore {
    mapScreen : {
      state : TStateScreenMap;
      modal : {
        busStopDetail : {};
        isActive : boolean;
      }
    }
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