import React, { useEffect } from 'react';
import MainLayout from '../../components/MainLayout';

//Redux
import { useDispatch } from 'react-redux'
import { activateDrawerGesture } from '../../redux/actions/ConfigurationActions';
import { useNavigation } from '@react-navigation/native';

//Components
import SendMessageArea from './components/SendMessageArea';
import MessageList from './components/MessageList';

const Chat = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const blurScreen = navigation.addListener('blur', () => dispatch(activateDrawerGesture(true)));
    const focusScreen = navigation.addListener('focus',() => dispatch(activateDrawerGesture(false)));

    return () => {
      blurScreen();
      focusScreen();
    }
  },[]);

  return <MainLayout title='Chat Administrador' backToScreen={true}>
    <MessageList />
    <SendMessageArea />
  </MainLayout>
}

export default Chat;