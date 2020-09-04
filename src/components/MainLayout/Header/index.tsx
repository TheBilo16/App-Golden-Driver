import React from 'react';

import HeaderDefaultScreen from './HeaderDefaultScreen';
import HeaderBackToScreen from './HeaderBackToScreen';
import HeaderProps from '../namespaces';

const Header = {
  DefaultScreen : (props : HeaderProps.IDefault) => <HeaderDefaultScreen {...props} />,
  BackToScreen : (props : HeaderProps.IBackToScreen) => <HeaderBackToScreen {...props} />
}

export default Header;