import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions'
import MainLayout from '../../components/MainLayout';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const Nosotros = () => {
  useEffect(() => {
    enabledNotifications();
  },[]);

  return <MainLayout title='Sobre Nosotros' >
  </MainLayout>
}

const enabledNotifications = async () => {
  await registerForPushNotificationsAsync();

  let foreground = Notifications.addNotificationReceivedListener(not => {
    alert('Notificacion Recibida');
    console.log(not);
  })

  let background = Notifications.addNotificationResponseReceivedListener(res => {
    console.log(res);
  });

  return () => {
    Notifications.removeNotificationSubscription(foreground);
    Notifications.removeNotificationSubscription(background);
  }
}

const registerForPushNotificationsAsync = async () => {
  let token : string = '';

  try {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus : string = status;

    //Si no tengo permisos los pido
    if(status !== 'granted') {
      const response = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = response.status;
    }

    if(finalStatus !== 'granted') {
      alert('No tendras acceso a las notificaciones');
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
  }catch(e){
    console.log(e);
  }

  return token;
}

export default Nosotros;