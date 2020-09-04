import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';

//Components
import MainLayout from '../../components/MainLayout';
import Item from './Item';

//Hooks
import useTravelsGetData from './hooks/useTravelsGetData';

const Travels = () => {
  const { isTasksLoading , travels } = useTravelsGetData();

  return <MainLayout title='Viajes' >
    {
      isTasksLoading ? 
        <ActivityIndicator color='#2A5AD7' size={58} /> : 
        <ScrollView>
          { travels.map((v,i) => <Item key={i} id={i} {...v} />) }
        </ScrollView>
    }
  </MainLayout>
}

export default Travels;