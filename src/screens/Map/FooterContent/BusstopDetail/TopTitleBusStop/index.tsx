import React from 'react';
import { TopTitleContainer , TitleBusStop, WarningMessage } from './styles';
import ItemList from '../../../../../components/ItemList';
import IconCircle from './IconCircle';

const TopTitleBusStop = () => {
  return <TopTitleContainer>
    <ItemList 
      hideIconChevron={true}
      icon={<IconCircle />}
    >
      <TitleBusStop>Ruta 17 , Calle Principal 146 </TitleBusStop>
      <WarningMessage>Completado</WarningMessage>
    </ItemList>
  </TopTitleContainer>
}

export default TopTitleBusStop;