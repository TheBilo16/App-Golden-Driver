import React, { useEffect } from 'react';
import Notifications from 'expo-notifications';
import Permissions from 'expo-permissions'
import MainLayout from '../../components/MainLayout';

const Nosotros = () => {
  useEffect(() => {
    enabledNotifications();
  },[]);

  return <MainLayout title='Sobre Nosotros' >
  </MainLayout>
}

const enabledNotifications = async () => {
  const token = await registerForPushNotificationsAsync();

  Notifications.addNotificationResponseReceivedListener(res => {
    console.log(res);
  });
}

const registerForPushNotificationsAsync = async () => {
  let token : string = '';

  try {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus : string = '';

    //Si no tengo permisos los pido
    if(status !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    if(finalStatus !== 'granted') {
      alert('No tendras acceso a las notificaciones');
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token); //debug...
  }catch(e){
    console.log(e);
  }

  return token;
}

export default Nosotros;