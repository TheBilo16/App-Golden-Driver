import React, { FC } from 'react';
import { MainContainer, Content } from './styles';
import Header from './Header';
import { ScrollView } from 'react-native-gesture-handler';

interface IProps {
  title : string
}

const MainLayout : FC<IProps> = ({ children , title }) : JSX.Element => {
  return <MainContainer>
    <Header title={title} />
    <Content>
      { children }
    </Content>
  </MainContainer>
}

export default MainLayout;