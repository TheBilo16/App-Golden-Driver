import { TTravelState } from "../../../../types";

namespace TravelController {
  export interface IStore {
    tasks : ITravel[]
  }

  export interface ITravel {
    title : string,
    date : string,
    link : string,
    state : TTravelState
  }
}

export default TravelController;