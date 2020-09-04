import React, { FC } from 'react';
import { TouchableOpacity , Animated } from 'react-native';

import NSAlertBox from '../../metadata';
import ABS from '../styles';
import MS from './styles'

//Animation
import useSlideDownAnimation from '../../hooks/useSlideDownAnimation';
const AnimatableMessage = Animated.createAnimatedComponent(ABS.MainContainer);

const Message : FC<NSAlertBox.IPropsMessage>  = ({ title , message , buttonText , onPress }) => {
  const animationStyles = useSlideDownAnimation();
  
  return <AnimatableMessage style={animationStyles}>
    <ABS.ContainerTitle>
      <ABS.Title>{title}</ABS.Title>
    </ABS.ContainerTitle>
    <ABS.ContainerMessage>
      <ABS.Message>{message}</ABS.Message>
    </ABS.ContainerMessage>
    <ABS.ContainerButtons>
      <MS.Button as={TouchableOpacity} onPress={onPress}>
        <MS.Text>{buttonText}</MS.Text>
      </MS.Button>
    </ABS.ContainerButtons>
  </AnimatableMessage>
}

Message.defaultProps = {
  buttonText : 'Aceptar'
}

export default Message;