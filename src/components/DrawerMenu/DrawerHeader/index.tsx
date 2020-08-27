import React from 'react';
import { DrawerImageBusContainer, DrawerImageBus, DrawerImageTextContainer, DrawerImageTitle, DrawerImageInformation } from './styles';

const DrawerHeader = () => {
  return <DrawerImageBusContainer>
    <DrawerImageBus source={{ uri : 'https://st.redbus.in/bo-images/PER/WM/15614/874/OT/L/lejRej.jpeg' }} />
    <DrawerImageTextContainer>
      <DrawerImageTitle>AKM - 344</DrawerImageTitle>
      <DrawerImageInformation>N° de Placa</DrawerImageInformation>
    </DrawerImageTextContainer>
  </DrawerImageBusContainer>
}

export default DrawerHeader;