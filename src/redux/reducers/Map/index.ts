import { MapController } from "./metadata";

const initialState : MapController.IStore = {
  travelState : 'pendient',
  mapScreen : {
    state : 'bottom-btn',
    modal : {
      busStopDetail : {
        name : '',
        ubication : '',
        date : '',
        detailState : 'in-process',
      },
      isActive : false
    }
  }
}

const reducer = (state = initialState , action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default reducer;