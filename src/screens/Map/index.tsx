import React from 'react';
import { MapMainContainer } from './styles';
import { MapControllerProvider } from '../../context/MapController';

//Components
import FooterContent from './FooterContent';
import MainContent from './MainContent';

const Map = () => {
  return <MapMainContainer>
    <MapControllerProvider>
      <MainContent />
      <FooterContent />      
    </MapControllerProvider>
  </MapMainContainer>
}

export default Map;