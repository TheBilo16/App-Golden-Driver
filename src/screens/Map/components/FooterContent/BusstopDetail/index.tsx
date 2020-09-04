import React, { useState } from 'react';
import { BusstopModalContainer } from './styles';

//Components
import DetailList from './DetailList';
import BottomIconActivator from './BottomIconActivator';
import TopTitleBusStop from './TopTitleBusStop';

//Redux
import { useSelector , shallowEqual } from 'react-redux';

const BusstopDetail = () => {
  const [ moreInformation , setMoreInformation ] = useState<boolean>(false);
  
  //Redux
  const { mapScreen } = useSelector(({ map }) => map, shallowEqual);
  const { 
    busStopDetail : { name, detailState },
    isActive
  } = mapScreen.modal;

  //Si el modal no esta activo
  if(!isActive) return <></>;

  //Ver mas informacion
  const ToggleMoreInformation = () => setMoreInformation(() => !moreInformation);
  
  return <BusstopModalContainer>
    <TopTitleBusStop title={name} busStopState={detailState} />
    <DetailList isActive={moreInformation} />
    <BottomIconActivator onPress={ToggleMoreInformation} isMoreInformation={moreInformation} />
  </BusstopModalContainer>
}

export default BusstopDetail;