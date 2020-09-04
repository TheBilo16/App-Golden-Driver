import { LatLng } from "react-native-maps";
import { TTravelState, TStateScreenMap, TBusStopState } from "../../../../types";

namespace MapController {

  export interface IStore {
    travelState : TTravelState,
    mapScreen : {
      state : TStateScreenMap;
      modal : {
        busStopDetail : IBusStopDetail;
        isActive : boolean;
      };
      alertQuestionActive : boolean
    }
  }

  export interface IBusStopDetail {
    name : string;
    ubication: string;
    detailState : TBusStopState;
    date : string;
  }

  export interface IMarker {
    title : string,
    coordinate : LatLng,
    information : IBusStopDetail,
  }
}

export {
  MapController
}