import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

//Others
import HeaderProps from '../../namespaces';
import HeaderMenu from '../styles';
import { IconBackToScreen , Title , TitleContainer } from './styles';


const HeaderBackToScreen : FC<HeaderProps.IBackToScreen> = ({ title }) => {
  const navigation = useNavigation();
  const BackToScreen = () => navigation.goBack();

  return <HeaderMenu isBackToScreen={true} >
    <IconBackToScreen as={TouchableOpacity} onPress={BackToScreen} >
      <AntDesign name="back" size={24} color="black" />
    </IconBackToScreen>
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
  </HeaderMenu>
}

export default HeaderBackToScreen;