import { TStateScreenMap } from "../../../types";
import { Dispatch } from "react";


interface IStore {
  MapScreenState : TStateScreenMap,
  BusStopInformation : {}
}

interface IReducer {
  type : string,
  payload : any
}

interface IContext {
  state : IStore,
  dispatch : Dispatch<IReducer>
}

export {
  IContext,
  IStore,
  IReducer
}