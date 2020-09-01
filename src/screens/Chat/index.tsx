import React, { useEffect } from 'react';
import MainLayout from '../../components/MainLayout';
import { useDispatch } from 'react-redux'
import { activateDrawerGesture } from '../../redux/actions/ConfigurationActions';
import { useNavigation } from '@react-navigation/native';

const Chat = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activateDrawerGesture(false));

    const eventBlur = navigation.addListener('blur', () => dispatch(activateDrawerGesture(true)));
    return eventBlur;
  },[]);

  return <MainLayout title='Chat Administrador' backToScreen={true}>

  </MainLayout>
}

export default Chat;