import React, { FC, useContext, useCallback } from 'react';
import { MapButtonAreaContainer } from './styles';
import { MapControllerContext } from '../../../../context/MapController';
import { TYPES } from '../../../../context/MapController/store/reducer';
import { TStateScreenMap, TTravelState } from '../../../../types';

//Provicional
import { TouchableOpacity, Text } from 'react-native';

const MapButtonArea : FC = () => {
  const { state , dispatch } = useContext(MapControllerContext);
  const { travelState } = state!;

  //Cambiar el estado de visualizacion del mapa
  const ChangeStateToMap = useCallback(() => {
    if(travelState === 'pendient'){
      let payload : TTravelState = 'in-process';
      dispatch!({
        type : TYPES.CHANGE_TRAVEL_STATE,
        payload
      });
      return;
    }

    let payload : TStateScreenMap = 'view-all';
    dispatch!({
      type : TYPES.CHANGE_MAP_STATE_TYPE,
      payload 
    });

  }, [state?.travelState]);

  return <MapButtonAreaContainer>
    <TouchableOpacity onPress={ChangeStateToMap}>
      <Text>{ travelState === 'pendient' ? 'Comenzar Viaje' : 'Ver Viaje' }</Text>
    </TouchableOpacity>
  </MapButtonAreaContainer>
}

export default MapButtonArea;