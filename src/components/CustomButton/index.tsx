import React, { FC} from 'react';
import { ButtonText , ButtonContainer , IconContainer } from './styles';
import { TouchableOpacity } from 'react-native';

interface IProps {
  horizontalSize? : string,
  icon? : JSX.Element,
  text : string,
  onPress?() : void
}

const CustomButton : FC<IProps> = ({ horizontalSize , icon , text , onPress }) => {
  return <ButtonContainer 
    horizontalSize={horizontalSize} 
    as={TouchableOpacity} 
    onPress={onPress}
  >
    <IconContainer>
      {icon}
    </IconContainer>
    <ButtonText>{text}</ButtonText>
  </ButtonContainer>
}

export default CustomButton;