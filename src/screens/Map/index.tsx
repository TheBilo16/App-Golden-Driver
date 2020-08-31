import React from 'react';
import { MapMainContainer } from './styles';
import { MapControllerProvider } from '../../context/MapController';

//Components
import FooterContent from './FooterContent';
import MainContent from './MainContent';
import MainLayout from '../../components/MainLayout';

const Map = () => {
  return <MainLayout title='Mapa de Rutas' backToScreen={true} >
    <MapMainContainer>
      <MapControllerProvider>
        <MainContent />
        <FooterContent />      
      </MapControllerProvider>
    </MapMainContainer>    
  </MainLayout>
}

export default Map;