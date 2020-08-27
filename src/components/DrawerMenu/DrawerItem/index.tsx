import React, { FC } from 'react';
import { DrawerItemContainer, DrawerItemIconContainer, DrawerItemText } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps {
  title : string,
  icon : JSX.Element,
  onPress?() : void
}

const DrawerItem : FC<IProps> = ({ icon , onPress , title }) => {
  return <TouchableOpacity onPress={onPress}>
    <DrawerItemContainer onPress={onPress}>
      <DrawerItemIconContainer>
        {icon}
      </DrawerItemIconContainer>
      <DrawerItemText>{title}</DrawerItemText>      
    </DrawerItemContainer>     
  </TouchableOpacity>
}

export default DrawerItem;