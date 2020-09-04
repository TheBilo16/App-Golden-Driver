import React, { FC , memo } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MapButtonAreaContainer } from './styles';

import CustomButton from '../../../../../components/CustomButton';

//Redux
import { useDispatch , useSelector , shallowEqual } from 'react-redux';
import { changeMapState, changeAlertBoxState } from '../../../../../redux/actions/MapActions';

const MapButtonArea : FC = () => {
  //Redux
  const dispatch = useDispatch();
  const { travelState } = useSelector(({ map }) => map , shallowEqual);

  //Cambiar el estado de visualizacion del mapa
  const ChangeStateToMap = () => {
    if(travelState === 'pendient'){
      dispatch(changeAlertBoxState(true));
      return;
    }
    
    dispatch(changeMapState('view-all'));
  };

  return <MapButtonAreaContainer>
    <CustomButton 
      text={ travelState === 'pendient' ? 'Comenzar Viaje' : 'Ver Viaje' }
      onPress={ChangeStateToMap} 
      icon={<Ionicons name="md-bus" size={20} color="#fff" />}
    />
  </MapButtonAreaContainer>
}

export default memo(MapButtonArea);