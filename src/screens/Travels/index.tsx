import React from 'react';
import { ScrollView } from 'react-native';
import MainLayout from '../../components/MainLayout';
import Item from './Item';

import { useSelector } from 'react-redux';

const Travels = () => {
  const { tasks } = useSelector(({ travels }) => travels);

  return <MainLayout title='Viajes' >
    <ScrollView>
      { tasks.map((v,i) => <Item key={i} id={i} {...v} />) }
    </ScrollView>
  </MainLayout>
}

export default Travels;