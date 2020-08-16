import React, { FC, memo } from 'react';
import { MainContainer, TextSectionContainer, InputSectionContainer, Label, Icon, InputLabel } from './styles';

interface IProps {
  title : string,
  icon : JSX.Element,
  value : string,
  isPassword? : boolean
}

const Input : FC<IProps> = ({ title , icon , value , isPassword }) => {
  return <MainContainer>
    <TextSectionContainer>
      <Icon>{icon}</Icon>
      <Label>{title}</Label>
    </TextSectionContainer>
    <InputSectionContainer>
      <InputLabel editable={false} secureTextEntry={isPassword} defaultValue={value} />
    </InputSectionContainer>
  </MainContainer>
}

Input.defaultProps = {
  isPassword : false
}

export default memo(Input);