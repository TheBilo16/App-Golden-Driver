import React, { FC, memo } from 'react';
import { FontAwesome , Feather } from '@expo/vector-icons';
import { ScreenTitle, ChatIconContainer } from './styles';
import { TouchableOpacity } from 'react-native';
import useHeaderMenu from '../../../../hooks/useHeaderMenu';
import HeaderProps from '../../namespaces';
import HeaderMenu from '../styles';

const Header : FC<HeaderProps.IDefault> = ({ title }) : JSX.Element => {
  const { openChatMenu , openDrawerMenu } = useHeaderMenu();

  return <HeaderMenu>
    <TouchableOpacity onPress={openDrawerMenu} >
      <FontAwesome name="bars" size={20} color="black" />
    </TouchableOpacity>
    <ScreenTitle>{title}</ScreenTitle>
    <ChatIconContainer as={TouchableOpacity} onPress={openChatMenu}>
      <Feather name="message-square" size={16} color='#fff' />
    </ChatIconContainer>
  </HeaderMenu>
}

export default memo(Header);