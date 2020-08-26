import React, { useState, useContext, useCallback } from 'react';
import { BusstopModalContainer } from './styles';
import DetailList from './DetailList';
import BottomIconActivator from './BottomIconActivator';
import TopTitleBusStop from './TopTitleBusStop';
import { MapControllerContext } from '../../../../context/MapController';

const BusstopDetail = () => {
  const { state } = useContext(MapControllerContext);
  const [ moreInformation , setMoreInformation ] = useState<boolean>(false);
  const { name , detailState } = state?.mapScreen.modal.busStopDetail!;

  //Ver mas informacion
  const ToggleMoreInformation = useCallback(() => 
    setMoreInformation(() => !moreInformation)
  ,[moreInformation]);

  //Si el modal no esta activo
  if(!state?.mapScreen.modal.isActive) return <></>;

  return <BusstopModalContainer>
    <TopTitleBusStop title={name} busStopState={detailState} />
    <DetailList isActive={moreInformation} />
    <BottomIconActivator onPress={ToggleMoreInformation} isMoreInformation={moreInformation} />
  </BusstopModalContainer>
}

export default BusstopDetail;