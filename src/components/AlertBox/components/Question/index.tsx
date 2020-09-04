import React, { FC, useEffect } from 'react';
import { TouchableOpacity, Animated } from 'react-native';

import NSAlertBox from '../../metadata';
import ABS from '../styles';
import QS from './styles'
import useSlideDownAnimation from '../../hooks/useSlideDownAnimation';

const AnimatableQuestion = Animated.createAnimatedComponent(ABS.MainContainer);

const Question : FC<NSAlertBox.IPropsQuestion> = ({ title , message , buttonsText , onPressCancel , onPressSuccess }) => {
  const [ success , cancel ] = buttonsText!;
  const animationStyles = useSlideDownAnimation();
  
  return <AnimatableQuestion style={animationStyles}>
    <ABS.ContainerTitle>
      <ABS.Title>{title}</ABS.Title>
    </ABS.ContainerTitle>
    <ABS.ContainerMessage>
      <ABS.Message>{message}</ABS.Message>
    </ABS.ContainerMessage>
    <ABS.ContainerButtons>
      <QS.Button main as={TouchableOpacity} onPress={onPressSuccess}>
        <QS.Text main>{success}</QS.Text>
      </QS.Button>
      <QS.Button as={TouchableOpacity} onPress={onPressCancel}>
        <QS.Text>{cancel}</QS.Text>
      </QS.Button>
    </ABS.ContainerButtons>
  </AnimatableQuestion>
}

Question.defaultProps = {
  buttonsText : ['Aceptar','Cancelar']
}

export default Question;