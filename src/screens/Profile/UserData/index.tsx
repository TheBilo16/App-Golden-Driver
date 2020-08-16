import React, { FC } from 'react';
import { View } from 'react-native';
import { AntDesign , Ionicons , FontAwesome } from '@expo/vector-icons'
import Input from './Input';
import { ContainerUserData } from './styles';

interface IProps {
  driverCode : string,
  licenseCode : string,
  phone : string
}

const UserData : FC<IProps> = ({ driverCode , licenseCode , phone }) => {
  return <View>
    <ContainerUserData>
      <Input 
        title='Codigo del Conductor' 
        icon={<AntDesign name="barcode" size={22} color='#F8B83E' />}
        value={driverCode} 
      />
      <Input 
        title='Numero de Placa' 
        icon={<FontAwesome name="drivers-license-o" size={22} color='#F8B83E' />}
        value={licenseCode} 
      />
      <Input 
        title='Numero de Celular' 
        icon={<Ionicons name="md-phone-portrait" size={22} color='#F8B83E' />}
        value={phone}
      />      
    </ContainerUserData>
  </View>
}

export default UserData;