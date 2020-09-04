import ChatController from "./metadata";

const initialState : ChatController.IStore = {

}

const reducer = (state = initialState, action) : ChatController.IStore => {
  switch(action.type){
    default:
      return state;
  }
}

export default reducer;