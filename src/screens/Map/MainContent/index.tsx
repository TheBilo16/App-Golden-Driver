import React, { useCallback, useContext } from 'react';
import MapView , { Marker } from 'react-native-maps';
import { MapTravel } from './styles'
import { MapControllerContext } from '../../../context/MapController';
import { TYPES } from '../../../context/MapController/store/reducer';
import { MapContext } from '../../../context/MapController/namespaces';

const MainContent = () => {
  const { state , dispatch } = useContext(MapControllerContext);

  const ActivateModalBusStopDetail = useCallback(() => {
    if(state?.mapScreen.state === 'bottom-btn') return;

    let payload : MapContext.IBusStopDetail = {
      name : 'Ruta 17 , Calle Principal 146',
      ubication : 'Casilla Postal 18-209, Lima Urbanizacion Corpac San Isidro',
      date : 'Lunes, Febrero 26 del 2020',
      detailState : 'in-process',
    }

    dispatch!({
      type : TYPES.CHANGE_BUSSTOP_INFORMATION,
      payload
    })
  },[state?.mapScreen.state]);

  return (
    <MapTravel
      as={MapView}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker 
        title='Marker de Prueba' 
        coordinate={{ 
          latitude: 37.78825,
          longitude: -122.4324
        }}
        onPress={ActivateModalBusStopDetail}
      />
  </MapTravel>
  )
}

export default MainContent;