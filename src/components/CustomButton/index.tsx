import React, { FC } from 'react';
import { ButtonText , ButtonContainer } from './styles';
import { TouchableOpacity } from 'react-native';

interface IProps {
  horizontalSize? : string,
  text : string,
  onPress?() : void
}

const CustomButton : FC<IProps> = ({ horizontalSize , text , onPress }) => {
  return <ButtonContainer horizontalSize={horizontalSize} as={TouchableOpacity} onPress={onPress}>
    <ButtonText>{text}</ButtonText>
  </ButtonContainer>
}

export default CustomButton;