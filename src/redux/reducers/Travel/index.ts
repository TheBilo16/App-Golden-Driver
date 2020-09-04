import TravelController from "./metadata";
import TYPES from "../../actions/TravelActions";

const initialState : TravelController.IStore = {
  tasks : [],
  isTasksLoading : true
}

const reducer = (state = initialState, action) : TravelController.IStore => {
  switch(action.type){
    case TYPES.UPDATE_DRIVER_TASKS:
      return {
        tasks : action.payload,
        isTasksLoading : false
      }
      
    default:
      return state;
  }
}

export default reducer;