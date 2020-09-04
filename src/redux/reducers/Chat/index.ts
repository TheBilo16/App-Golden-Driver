import ChatController from "./metadata";
import TYPES from "../../actions/ChatActions";

const initialState : ChatController.IStore = {
  messages : [],
  isLoadingMessages : true
}

const reducer = (state = initialState, action) : ChatController.IStore => {
  switch(action.type){
    case TYPES.GET_ALL_CHAT_MESSAGES:
      return {
        ...state,
        messages : action.payload,
        isLoadingMessages : false
      }

    case TYPES.SEND_MY_MESSAGE:
      return {
        ...state,
        messages : [ ...state.messages , action.payload ]
      }

    default:
      return state;
  }
}

export default reducer;