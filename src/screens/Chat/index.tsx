import React, { useEffect } from 'react';
import MainLayout from '../../components/MainLayout';
import { useDispatch } from 'react-redux'
import { activateDrawerGesture } from '../../redux/actions/ConfigurationActions';
import { useNavigation } from '@react-navigation/native';

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

  </MainLayout>
}

export default Chat;