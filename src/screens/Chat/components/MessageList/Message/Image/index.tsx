import React, { FC } from 'react';
import { Animated } from 'react-native';
import NSChat from '../../../../metadata';
import MS from '../styles';
import { CustomImage } from './styles';

//Hooks
import useAnimationMessage from '../../../../hooks/useAnimationMessage';

const ContainerAnimatable = Animated.createAnimatedComponent(MS.Container);

const Image : FC<NSChat.IPropsMessageImage> = ({ content , isChofer }) => {
  const styles = useAnimationMessage();

  return <ContainerAnimatable style={styles} isChofer={isChofer!}>
    { !isChofer && <MS.AuthorTitle>Administrador</MS.AuthorTitle> }
    <CustomImage source={{ uri : content }} />
  </ContainerAnimatable>
}

Image.defaultProps = {
  isChofer : false
}

export default Image;