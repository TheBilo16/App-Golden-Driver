import React, { FC, memo } from 'react';
import { Entypo } from '@expo/vector-icons'
import { BottomContent , CustomText , IconContainer } from './styles';
import { TouchableOpacity } from 'react-native';

interface IProps {
  isMoreInformation : boolean,
  onPress() : void
}

const BottomIconActivator : FC<IProps> = ({ isMoreInformation , onPress }) => {
  return <BottomContent as={TouchableOpacity} isMoreInformation={isMoreInformation} onPress={onPress} >
    <IconContainer>
      <Entypo name={isMoreInformation ? 'chevron-down' : 'chevron-up'} size={20} color="#F8B83E" />
    </IconContainer>
    <CustomText>
      { isMoreInformation ? 'Menos Informacion' : 'Mas Informacion' }
    </CustomText>          
  </BottomContent>
} 

export default memo(BottomIconActivator);