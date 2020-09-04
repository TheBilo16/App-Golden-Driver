import React, { memo } from 'react';
import MainLayout from '../../components/MainLayout';
import UserIdentity from './UserIdentity';
import UserData from './UserData';
import { ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { ButtonContainer } from './styles';

//Config Default 
const identity = {
  uri : 'https://media.metrolatam.com/2020/07/26/screenshot202007-01d2155de1de50e0c683eb3bf3d9ef86-1200x800.jpg',
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
      <ButtonContainer>
        <CustomButton horizontalSize='80%' text='Cerrar Sesión' />
      </ButtonContainer>
    </ScrollView>
  </MainLayout>
}

export default memo(Profile);