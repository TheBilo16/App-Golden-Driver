import React, { FC , useContext } from 'react';
import { RouteControllerContext } from '../../context/RouteController';

import { FontAwesome , AntDesign , Ionicons , MaterialIcons } from '@expo/vector-icons';
import {AsyncStorage} from 'react-native';

import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerMenuContainer, DrawerItemsContainer , DrawerItemContainerCentral, DrawerItemBars } from './styles';
import DrawerItem from './DrawerItem';
import DrawerHeader from './DrawerHeader';
import useDrawerActions from '../../hooks/useDrawerActions';

const DrawerMenu : FC<DrawerContentComponentProps> = (props) => {
  const { navigation } = props;
  const { CloseSession , NavigateToScreen } = useDrawerActions(navigation);
  
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
            onPress={() => NavigateToScreen('QRLector')}
          />
          <DrawerItem 
            icon={<Ionicons name="md-person" size={16} color="rgba(0,0,0,.54)" />} 
            title='Perfil' 
            onPress={() => NavigateToScreen('Profile')}
          />
          <DrawerItem 
            icon={<FontAwesome name="bus" size={16} color="rgba(0,0,0,.54)" />} 
            title='Sobre Nosotros' 
            onPress={() => NavigateToScreen('About-Us')}
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