import React, { FC, memo } from 'react';
import { CentralContent } from './styles';
import { Entypo , MaterialIcons , Ionicons } from '@expo/vector-icons';
import Item from './Item';
import { ScrollView } from 'react-native';

//Redux
import { useSelector , shallowEqual } from 'react-redux';

interface IProps {
  isActive : boolean
}

const DetailList : FC<IProps> = ({ isActive }) => {
  //Redux
  const { mapScreen : { modal } } = useSelector(({ map }) => map, shallowEqual);
  const { 
    busStopDetail : {
      date,
      ubication
    }
  } = modal;

  const OptionsList = [
    {
      title : 'Ubicacion',
      description : ubication,
      icon : <Entypo name="location" size={24} color="#F8B83E" />,
      isNavigator : false
    },
    {
      title : date,
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

  if(!isActive) return <></>;

  return <CentralContent as={ScrollView}>
    { 
      OptionsList.map((v,i) =>
        <Item 
          key={i}  
          title={v.title}
          description={v.description}
          icon={v.icon}
          isNavigator={v.isNavigator}
        />
      )
    }
  </CentralContent>
}

export default memo(DetailList);