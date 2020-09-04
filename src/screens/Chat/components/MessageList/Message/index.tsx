import React from 'react';

//Components
import Basic from './Basic';
import Image from './Image';

const Message = {
  Basic : props => <Basic {...props} />,
  Image : props => <Image {...props} />,
}

export default Message;