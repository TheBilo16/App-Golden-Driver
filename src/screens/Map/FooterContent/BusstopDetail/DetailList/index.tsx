import React, { FC, memo } from 'react';
import { CentralContent } from './styles';
import { Entypo , MaterialIcons , Ionicons } from '@expo/vector-icons';
import Item from './Item';
import { ScrollView } from 'react-native';

interface IProps {
  isActive : boolean
}

const Options = [
  {
    title : 'Location',
    description : 'Casilla Postal 18-209, Lima Urbanizacion Corpac San Isidro',
    icon : <Entypo name="location" size={24} color="#F8B83E" />,
    isNavigator : false
  },
  {
    title : 'Lunes, Febrero 26 del 2020 ',
    description : 'Casilla Postal 18-209, Lima Urbanizacion Corpac San Isidro',
    icon : <MaterialIcons name="date-range" size={24} color="#F8B83E" />,
    isNavigator : false
  },
  {
    title : 'Registro de Usuarios',
    description : 'Usuarios Registrados',
    icon : <Ionicons name="md-person" size={24} color="#F8B83E" />,
    isNavigator : true
  }
]

const DetailList : FC<IProps> = ({ isActive }) => {

  if(!isActive) return <></>;

  return <CentralContent as={ScrollView}>
    { Options.map((v,i) => <Item {...v} onPress={() => 0} />) }
  </CentralContent>
}

export default memo(DetailList);