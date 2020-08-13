import React, { FC, memo } from 'react';
import { FontAwesome , Feather } from '@expo/vector-icons';
import { HeaderMenu, ScreenTitle, ChatIconContainer } from './styles';
import { TouchableOpacity } from 'react-native';
import useHeaderMenu from '../../../hooks/useHeaderMenu';

interface IProps {
  title : string
}

const Header : FC<IProps> = ({ title }) : JSX.Element => {
  const { openChatMenu , openDrawerMenu } = useHeaderMenu();

  return <HeaderMenu>
    <TouchableOpacity onPress={openDrawerMenu} >
      <FontAwesome name="bars" size={20} color="black" />
    </TouchableOpacity>
    <ScreenTitle>{title}</ScreenTitle>
    <TouchableOpacity onPress={openChatMenu}>
      <ChatIconContainer>
        <Feather name="message-square" size={16} color='#fff' />
      </ChatIconContainer>
    </TouchableOpacity>
  </HeaderMenu>
}

export default memo(Header);