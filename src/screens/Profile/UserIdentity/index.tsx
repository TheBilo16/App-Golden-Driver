import React, { FC, memo } from 'react';

//Components
import ProfileImage from '../../../components/ProfileImage';
import { MainContent, ImageContainerBorder, UsernameContainer, Username } from './styles';

interface IProps {
  uri : string,
  username : string
}

const UserIdentity : FC<IProps> = ({ uri , username }) => {
  return <MainContent>
    <ImageContainerBorder>
      <ProfileImage uri={uri} width='190px' height='190px' />
    </ImageContainerBorder>
    <UsernameContainer>
      <Username>{username}</Username>
    </UsernameContainer>
  </MainContent>
}

export default memo(UserIdentity);