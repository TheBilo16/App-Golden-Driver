import { MapContext } from "../namespaces";

const store : MapContext.IStore = {
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

export default store;