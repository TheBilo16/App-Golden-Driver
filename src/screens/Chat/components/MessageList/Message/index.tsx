import React from 'react';

//Components
import Basic from './Basic';
import Image from './Image';
import NSChat from '../../../metadata';

const Message = {
  Basic : (props : NSChat.IPropsMessageBasic) => <Basic {...props} />,
  Image : (props : NSChat.IPropsMessageImage) => <Image {...props} />,
}

export default Message;