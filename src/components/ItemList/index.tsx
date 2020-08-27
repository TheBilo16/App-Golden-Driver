import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { ContainerItem , ItemIconContainer, ChildrenContainer } from './styles';

interface IProps {
  icon : JSX.Element,
  hideIconChevron? : boolean,
  onPress?() : void
}

const ItemList : FC<IProps> = ({ icon, children , hideIconChevron , onPress }) => {
  return <ContainerItem>
    <ItemIconContainer horizontalSize={95}>
      {icon}
    </ItemIconContainer>
    <ChildrenContainer>
      {children}
    </ChildrenContainer>
    { !hideIconChevron && (
      <ItemIconContainer onPress={onPress} as={TouchableOpacity} horizontalSize={80}>
        <Entypo name="chevron-right" size={24} color="#D9D9D9" />
      </ItemIconContainer>      
    )}
  </ContainerItem>
}

ItemList.defaultProps = {
  hideIconChevron : false
}

export default ItemList;