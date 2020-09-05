import React , {  } from 'react';
import { AsyncStorage } from 'react-native';

//UIComponents
import { Content,FormGroup , LogoBox , Logo } from '../styles/style';
import Button from '../../../../UIComponents/Button';

//Source 
const logo = require('../source/logo.png');
const background = require('../source/fondo.png')

//REDUX
import { useDispatch } from 'react-redux';
import { updateRouteState } from '../../../../redux/actions/RouterActions';

const CheckLogin = ( { } ) => {

  const dispatch = useDispatch();

  //Aqui va el componente de redireccionamiento.
  const continueSession = async () => {
    try {

      let d = await AsyncStorage.getItem('dataChofer');
      let data = JSON.parse(d!);
      await AsyncStorage.setItem('choferID',data.id);
      dispatch( updateRouteState('auth') )
      console.log('Continuando la session anterior - ID reestablecida');

    }catch(e) { console.log(e.message) }
    
  }

  const removeSession = async () => {
    try {
      await AsyncStorage.clear();
      dispatch(updateRouteState('no-auth'));
      console.log('session actual eliminada')
    } catch(e) { console.log(e.message) }
    

  }

  return (
    <Content source={background}>
      <LogoBox>
        <Logo source={logo} />
      </LogoBox>
      <FormGroup>
        <Button 
          width="100%"
          onPress={continueSession}
          text = "Continuar la session"
          color="#2A5AD7"
        />
        <Button 
          width="100%"
          onPress={removeSession}
          text = "Iniciar con otra cuenta"
          color="white"
        />
      </FormGroup>
    </Content>
  )
}


export default CheckLogin;