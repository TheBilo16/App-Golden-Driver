import React, { FC , useContext } from 'react';
import { RouteControllerContext } from '../../context/RouteController';

import { FontAwesome , AntDesign , Ionicons , MaterialIcons } from '@expo/vector-icons';
import {AsyncStorage} from 'react-native';

import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerMenuContainer, DrawerItemsContainer , DrawerItemContainerCentral, DrawerItemBars } from './styles';
import DrawerItem from './DrawerItem';
import DrawerHeader from './DrawerHeader';

const DrawerMenu : FC<DrawerContentComponentProps> = (props) => {
  const NavigateToScreen = (link : string) : void => props.navigation.navigate(link);

  const { updateRouteState } = useContext(RouteControllerContext);

  const CloseSession = async () => {
    updateRouteState!('no-auth');
  };
  
  return <DrawerMenuContainer>
    <DrawerContentScrollView {...props}>
      <DrawerItemsContainer>
        <DrawerHeader />
        <DrawerItemContainerCentral>
          <DrawerItemBars />     
          <DrawerItem 
            icon={<MaterialIcons name="card-travel" size={16} color="rgba(0,0,0,.54)" />} 
            title='Viajes'
            onPress={() => NavigateToScreen('Travels')}
          />
          <DrawerItem 
            icon={<AntDesign name="qrcode" size={16} color="rgba(0,0,0,.54)" />} 
            title='Lector QR' 
            onPress={() => NavigateToScreen('Map')}
          />
          <DrawerItem 
            icon={<Ionicons name="md-person" size={16} color="rgba(0,0,0,.54)" />} 
            title='Perfil' 
            onPress={() => NavigateToScreen('Profile')}
          />
          <DrawerItem 
            icon={<FontAwesome name="bus" size={16} color="rgba(0,0,0,.54)" />} 
            title='Sobre Nosotros' 
            onPress={() => NavigateToScreen('Travels')}
          />     
        </DrawerItemContainerCentral>
      </DrawerItemsContainer>
      <DrawerItemContainerCentral isBottom>
        <DrawerItem 
          icon={<AntDesign name="back" size={16} color="rgba(0,0,0,.54)" />} 
          title='Cerrar Sesion' 
          onPress={CloseSession}
        />
      </DrawerItemContainerCentral>
    </DrawerContentScrollView>
  </DrawerMenuContainer>
}

export default DrawerMenu;