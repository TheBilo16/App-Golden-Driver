import React, { memo } from 'react';
import MainLayout from '../../components/MainLayout';
import UserIdentity from './UserIdentity';
import UserData from './UserData';
import { ScrollView } from 'react-native';

//Config Default 
const identity = {
  uri : 'https://pymstatic.com/44247/conversions/arturo-torres-medium.jpg',
  username : 'Billy Alexander Paredes Aycho'
}

const data = {
  driverCode : 'as4qw32sd1g8we3q1sdg1',
  licenseCode : 'GLAS-SD5S1',
  phone : '+51 913440869'
}

const Profile = () => {
  return <MainLayout title='Perfil de Usuario' >
    <ScrollView>
      <UserIdentity {...identity} />
      <UserData {...data} />      
    </ScrollView>
  </MainLayout>
}

export default memo(Profile);