import ConfigurationController from "./metadata";
import TYPES from "../../actions/ConfigurationActions";

const initialState : ConfigurationController.IStore = {
  isEnabledDrawerGesture : true
}

const reducer = (state = initialState , action) : ConfigurationController.IStore => {
  switch(action.type){
    case TYPES.CHANGE_DRAWER_GESTURE:
      return {
        isEnabledDrawerGesture : action.payload
      }

    default:
      return state;
  }
}

export default reducer;