import React, { useContext } from 'react';
import { MapControllerContext } from '../../../context/MapController';
import { MainFooterContainer } from './styles';
import BusstopDetail from './BusstopDetail';
import MapButtonArea from './MapButtonArea';

import { useSelector , shallowEqual } from 'react-redux';

const FooterContent = () => {
  const { mapScreen : { state } } = useSelector(({ map }) => map, shallowEqual);

  let NowScreen : JSX.Element = <></>;

  switch(state){
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