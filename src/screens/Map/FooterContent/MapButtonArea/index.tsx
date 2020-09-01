import React, { FC } from 'react';
import { MapButtonAreaContainer } from './styles';

import CustomButton from '../../../../components/CustomButton';

//Redux
import { useDispatch , useSelector , shallowEqual } from 'react-redux';
import { changeTravelState, changeMapState } from '../../../../redux/actions/ActionsMap';

const MapButtonArea : FC = () => {
  const dispatch = useDispatch();
  const { travelState } = useSelector(({ map }) => map , shallowEqual);

  //Cambiar el estado de visualizacion del mapa
  const ChangeStateToMap = () => {
    if(travelState === 'pendient'){
      dispatch(changeTravelState('in-process'));
      return;
    }

    dispatch(changeMapState('view-all'));
  };

  return <MapButtonAreaContainer>
    <CustomButton 
      text={ travelState === 'pendient' ? 'Comenzar Viaje' : 'Ver Viaje' }
      onPress={ChangeStateToMap} 
    />
  </MapButtonAreaContainer>
}

export default MapButtonArea;