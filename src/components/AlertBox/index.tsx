import React from 'react';

//Components
import Question from './components/Question';
import Message from './components/Message'

//Namespaces
import NSAlertBox from './metadata';

const AlertBox = {
  Question : (props : NSAlertBox.IPropsQuestion) => <Question {...props} />,
  Message : (props : NSAlertBox.IPropsMessage) => <Message {...props} />
}

export default AlertBox;