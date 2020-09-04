import React, { FC } from 'react';

//Components
import DarkScreen from '../../DarkScreen';
import AlertBox from '../../AlertBox';
import NSAlertBox from '../../AlertBox/metadata';

const Message : FC<NSAlertBox.IPropsMessage> = (props) => {
  return <DarkScreen>
    <AlertBox.Message {...props} />
  </DarkScreen>
}

export default Message;