import { TTravelState } from "../../../../types";
import { MapController } from "../../Map/metadata";

namespace TravelController {
  export interface IStore {
    tasks : ITravel[],
    isTasksLoading : boolean
  }

  export interface ITravel {
    title : string;
    date : string;
    link : string;
    state : TTravelState;
    markers : MapController.IMarker[]
  }
}

export default TravelController;