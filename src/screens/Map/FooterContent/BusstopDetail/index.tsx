import React, { useState } from 'react';
import { BusstopModalContainer } from './styles';
import DetailList from './DetailList';
import BottomIconActivator from './BottomIconActivator';
import TopTitleBusStop from './TopTitleBusStop';

const BusstopDetail = () => {
  const [ moreInformation , setMoreInformation ] = useState<boolean>(true);

  const ToggleMoreInformation = () => setMoreInformation(() => !moreInformation);

  return <BusstopModalContainer>
    <TopTitleBusStop />
    <DetailList isActive={moreInformation} />
    <BottomIconActivator onPress={ToggleMoreInformation} isMoreInformation={moreInformation} />
  </BusstopModalContainer>
}

export default BusstopDetail;