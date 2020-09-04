import React, { useEffect } from 'react';
import { MapMainContainer } from './styles';

//Components
import FooterContent from './components/FooterContent';
import MainContent from './components/MainContent';
import MainLayout from '../../components/MainLayout';
import Alert from '../../components/Alert';

//Redux
import { useSelector , shallowEqual } from 'react-redux';
import useMap from './hooks/useMap';

const Map = () => {
  const { QuestionAccept , QuestionCancel } = useMap();
  const { mapScreen : { alertQuestionActive } } = useSelector(({ map }) => map, shallowEqual);

  return <>
    <MainLayout title='Mapa de Rutas' backToScreen={true} >
      <MapMainContainer>
        <MainContent />
        <FooterContent />
      </MapMainContainer>    
    </MainLayout>
    {
      alertQuestionActive && (
        <Alert.Question
          title='Comenzar Viaje'
          message='¿Desea realizar esta operacion?'
          buttonsText={['Comenzar','Cancelar']}
          onPressSuccess={QuestionAccept}
          onPressCancel={QuestionCancel}
        />
      )
    }
  </>
}

export default Map;