import { TRouteState } from '../../types';

const TYPES = {
  UPDATE_ROUTE_STATE : 'update-route-state'
}

const updateRouteState = ( routeState : TRouteState ) => ({
  type : TYPES.UPDATE_ROUTE_STATE,
  payload : routeState
})

export {
  updateRouteState
}

export default TYPES;