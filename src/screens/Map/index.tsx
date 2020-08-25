import React from 'react';
import MapView from 'react-native-maps';
import { MapMainContainer , MapTravel } from './styles';
import FooterContent from './FooterContent';
import { MapControllerProvider } from '../../context/MapController';

const Map = () => {
  return <MapMainContainer>
    <MapControllerProvider>
      <MapTravel
        as={MapView}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <FooterContent />      
    </MapControllerProvider>
  </MapMainContainer>
}

export default Map;