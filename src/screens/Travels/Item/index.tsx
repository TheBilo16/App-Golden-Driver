import React, { FC , useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { ItemContainer, ItemInformation, Indicator, ItemCentered, ItemTitle, ItemSubtitle } from './styles';
import { TouchableOpacity , Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TravelController from '../../../redux/reducers/Travel/metadata';
import useFadeInAnimation from '../hooks/useFadeInAnimation';

interface IProps extends TravelController.ITravel {
  id : number
}

const Item : FC<IProps> = ({ id, title , date , state , link }) => {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate(link,{ id });

  //Animation
  const styles = useFadeInAnimation(id);

  return <ItemContainer style={styles} as={Animated.View}>
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