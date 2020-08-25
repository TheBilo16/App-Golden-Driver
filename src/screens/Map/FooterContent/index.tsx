import React, { useContext } from 'react';
import { MapControllerContext } from '../../../context/MapController';

const FooterContent = () => {
  const { state } = useContext(MapControllerContext);

  switch(state?.MapScreenState){
    case 'bottom-btn':
      return <></>;
    case 'view-all':
      return <></>;
  }
}

export default FooterContent;