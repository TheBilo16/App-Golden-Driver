import React, { FC } from 'react';
import { UserImage } from './styles';

interface IProps {
  width : number,
  height : number,
  uri : string
}

const ProfileImage : FC<IProps> = ({ width , height , uri }) => {
  return <UserImage 
    width={width} 
    height={height} 
    source={{uri}} 
  />
}

export default ProfileImage;