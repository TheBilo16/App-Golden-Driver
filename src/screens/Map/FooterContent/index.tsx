import React, { useContext } from 'react';
import { MapControllerContext } from '../../../context/MapController';
import { MainFooterContainer } from './styles';
import BusstopDetail from './BusstopDetail';
import MapButtonArea from './MapButtonArea';

const FooterContent = () => {
  const { state } = useContext(MapControllerContext);

  let NowScreen : JSX.Element = <></>;

  switch(state?.mapScreen.state){
    case 'bottom-btn':
      NowScreen = <MapButtonArea />;
      break;
    case 'view-all':
      NowScreen = <BusstopDetail />;
      break;
  }

  return <MainFooterContainer>
    {NowScreen}
  </MainFooterContainer>
}

export default FooterContent;