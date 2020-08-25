import { MapContext } from "../namespaces";

const store : MapContext.IStore = {
  mapScreen : {
    state : 'view-all',
    modal : {
      busStopDetail : {},
      isActive : true
    }
  }
}

export default store;