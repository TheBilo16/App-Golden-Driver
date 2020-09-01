import React, { useEffect } from 'react';
import { MapMainContainer } from './styles';

//Components
import FooterContent from './FooterContent';
import MainContent from './MainContent';
import MainLayout from '../../components/MainLayout';

//Redux
import { useDispatch } from 'react-redux';
import { setInitialState } from '../../redux/actions/MapActions';
import { activateDrawerGesture } from '../../redux/actions/ConfigurationActions';

const Map = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activateDrawerGesture(false));

    return () => {
      dispatch(setInitialState());
      dispatch(activateDrawerGesture(true));
    }
  },[]);

  return <MainLayout title='Mapa de Rutas' backToScreen={true} >
    <MapMainContainer>
      <MainContent />
      <FooterContent />    
    </MapMainContainer>    
  </MainLayout>
}

export default Map;