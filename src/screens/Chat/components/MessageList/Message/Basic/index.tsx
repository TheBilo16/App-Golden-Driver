import React, { FC } from 'react';
import NSChat from '../../../../metadata';
import MS from '../styles';

const Basic : FC<NSChat.IPropsMessageBasic> = ({ content , isChofer }) => {
  return <MS.Container isChofer={isChofer}>
    <MS.Text>{content}</MS.Text>
  </MS.Container>;
}

Basic.defaultProps = {
  isChofer : true
}

export default Basic;