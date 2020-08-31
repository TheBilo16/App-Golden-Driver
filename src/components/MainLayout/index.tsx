import React, { FC } from 'react';
import { MainContainer, Content } from './styles';
import Header from './Header';

interface IProps {
  title : string,
  backToScreen? : boolean
}

const MainLayout : FC<IProps> = ({ children , title , backToScreen }) : JSX.Element => {
  return <MainContainer>
    { 
      !backToScreen ? 
          <Header.DefaultScreen title={title} /> :
          <Header.BackToScreen title={title} />
    }
    <Content>
      { children }
    </Content>
  </MainContainer>
}

export default MainLayout;