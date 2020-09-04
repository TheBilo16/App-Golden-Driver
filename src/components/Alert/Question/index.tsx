import React, { FC } from 'react';

//Components
import DarkScreen from '../../DarkScreen';
import AlertBox from '../../AlertBox';
import NSAlertBox from '../../AlertBox/metadata';

const Question : FC<NSAlertBox.IPropsQuestion> = (props) => {
  return <DarkScreen>
    <AlertBox.Question {...props} />
  </DarkScreen>
}

export default Question;