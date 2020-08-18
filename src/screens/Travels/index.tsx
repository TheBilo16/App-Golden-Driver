import React from 'react';
import { ScrollView } from 'react-native';
import MainLayout from '../../components/MainLayout';
import Item from './Item';

const config = new Array(6).fill({
  title : 'San Juan de Lurigancho',
  date : 'Asignado el 16 de enero de 2020',
  link : ''
});

const Travels = () => {
  return <MainLayout title='Viajes' >
    <ScrollView>
      { config.map((v,i) => <Item key={i} {...v} />) }
    </ScrollView>
  </MainLayout>
}

export default Travels;