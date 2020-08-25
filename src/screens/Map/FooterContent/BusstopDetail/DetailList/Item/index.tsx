import React, { FC } from 'react';
import { ContainerItemList , DescriptionArea , TitleArea } from './styles';
import ItemList from '../../../../../../components/ItemList';

interface IProps {
  title : string;
  description : string;
  icon : JSX.Element;
  isNavigator? : boolean;
  onPress?() : void
}

const Item : FC<IProps> = ({ title , description , onPress , icon , isNavigator }) => {
  return <ContainerItemList>
    <ItemList
      hideIconChevron={!isNavigator}
      icon={icon} 
      onPress={onPress}
    >
      <TitleArea>{title}</TitleArea>
      <DescriptionArea isNavigator={isNavigator} >{description}</DescriptionArea>
    </ItemList>      
  </ContainerItemList>
}

Item.defaultProps = {
  isNavigator : false
}

export default Item;