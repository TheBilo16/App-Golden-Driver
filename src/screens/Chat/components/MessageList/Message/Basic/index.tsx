import React, { FC, useEffect } from 'react';
import NSChat from '../../../../metadata';

//Styles
import MS from '../styles';
import { MessageBasicText } from './styles';
import { Animated } from 'react-native';

//Hooks
import useAnimationMessage from '../../../../hooks/useAnimationMessage';

const ContainerAnimatable = Animated.createAnimatedComponent(MS.Container);

const Basic : FC<NSChat.IPropsMessageBasic> = ({ content , isChofer }) => {
  const styles = useAnimationMessage();

  return <ContainerAnimatable style={styles} isChofer={isChofer!}>
    { !isChofer && <MS.AuthorTitle>Administrador</MS.AuthorTitle> }
    <MessageBasicText>{content}</MessageBasicText>
  </ContainerAnimatable>;
}

Basic.defaultProps = {
  isChofer : true
}

export default Basic;