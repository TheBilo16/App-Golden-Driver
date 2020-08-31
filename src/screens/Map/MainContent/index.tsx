import React, { useCallback, useContext } from 'react';
import MapView , { Marker, LatLng } from 'react-native-maps';
import { MapTravel } from './styles'
import { MapControllerContext } from '../../../context/MapController';
import { TYPES } from '../../../context/MapController/store/reducer';
import { MapContext } from '../../../context/MapController/namespaces';

let Markers : MapContext.IMarker[] = [
  {
    title : 'Marker de Prueba',
    coordinate : {
      latitude : -12.0464,
      longitude : -77.0428
    },
    information : {
      name : 'Ruta 17 , Calle Principal 146',
      ubication : 'Casilla Postal 18-209, Lima Urbanizacion Corpac San Isidro',
      date : 'Lunes, Febrero 26 del 2020',
      detailState : 'completed',
    }
  },
  {
    title : 'Marker de Prueba 2',
    coordinate : {
      latitude : -12.04826767191362,
      longitude : -77.03936677245886
    },
    information : {
      name : 'Ruta 17 , Calle Principal 100',
      ubication : 'Casilla Postal 18-209, Lima Urbanizacion Corpac San Isidro',
      date : 'Martes, Agosto 28 del 2020',
      detailState : 'in-process',
    }
  }
]

const MainContent = () => {
  const { state , dispatch } = useContext(MapControllerContext);

  const ActivateModalBusStopDetail = useCallback((payload : MapContext.IBusStopDetail) => {
    if(state?.mapScreen.state === 'bottom-btn') return;

    dispatch!({ type : TYPES.CHANGE_BUSSTOP_INFORMATION, payload })
  },[state?.mapScreen.state]);

  return (
    <MapTravel
      as={MapView}
      initialRegion={{
        latitude: -12.0464,
        longitude: -77.0428,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {
        Markers.map((v,i) => (
          <Marker 
            key={i}
            title={v.title}
            coordinate={v.coordinate}
            onPress={() => ActivateModalBusStopDetail(v.information)}
          />
        ))
      }
  </MapTravel>
  )
}

export default MainContent;