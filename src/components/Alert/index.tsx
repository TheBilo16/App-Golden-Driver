import React from 'react';
import Message from './Message';
import Question from './Question';
import NSAlertBox from '../AlertBox/metadata';

const Alert = {
  Message : (props : NSAlertBox.IPropsMessage) => <Message {...props} />,
  Question : (props : NSAlertBox.IPropsQuestion) => <Question {...props} />
}

export default Alert;