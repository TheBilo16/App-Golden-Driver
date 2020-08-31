import React, { FC, useCallback } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { ItemContainer, ItemInformation, Indicator, ItemCentered, ItemTitle, ItemSubtitle } from './styles';
import { TouchableOpacity } from 'react-native';
import { TTravelState } from '../../../types';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  title : string,
  date : string,
  state : TTravelState,
  link : string
}

const Item : FC<IProps> = ({ title , date , state , link }) => {
  const navigation = useNavigation();
  const onPress = useCallback(()=> navigation.navigate(link),[link]);

  return <ItemContainer>
    <ItemCentered>
      <Indicator state={state} />
    </ItemCentered>
    <ItemInformation>
      <ItemTitle>{title}</ItemTitle>
      <ItemSubtitle>{date}</ItemSubtitle>
    </ItemInformation>
    <ItemCentered>
      <TouchableOpacity onPress={onPress}>
        <MaterialIcons name="chevron-right" size={28} color='#D9D9D9' />
      </TouchableOpacity>
    </ItemCentered>
  </ItemContainer>
}

Item.defaultProps = {
  state : 'pendient'
}

export default Item;