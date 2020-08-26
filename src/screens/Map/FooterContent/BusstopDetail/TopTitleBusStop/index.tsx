import React, { FC, useCallback } from 'react';
import { TopTitleContainer , TitleBusStop, WarningMessage } from './styles';
import ItemList from '../../../../../components/ItemList';
import IconCircle from './IconCircle';
import { TBusStopState } from '../../../../../types';

interface IProps {
  title : string;
  busStopState : TBusStopState;
}

const TopTitleBusStop : FC<IProps> = ({ title , busStopState }) => {
  //Cambiar el mensaje del componente
  const WarningMessageActionTitle = () : string => {
    switch(busStopState){
      case 'completed' : return 'Completado';
      case 'delay' : return 'Tardanza';
      case 'in-process' : return 'En Proceso';
      default: return '';
    }
  }

  return <TopTitleContainer>
    <ItemList 
      hideIconChevron={true}
      icon={<IconCircle />}
    >
      <TitleBusStop>{title}</TitleBusStop>
      <WarningMessage busStopState={busStopState} >{WarningMessageActionTitle()}</WarningMessage>
    </ItemList>
  </TopTitleContainer>
}

export default TopTitleBusStop;