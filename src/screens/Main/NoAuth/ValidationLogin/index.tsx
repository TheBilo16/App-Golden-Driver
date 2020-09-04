import React , {  } from 'react';

//UIComponents
import { Content,FormGroup , LogoBox , Logo } from '../styles/style';
import Button from '../../../../UIComponents/Button';

//Source 
const logo = require('../source/logo.png');
const background = require('../source/fondo.png')

//REDUX
import { useDispatch } from 'react-redux';
import { updateRouteState } from '../../../../redux/actions/RouterActions';

const LoginVerified = ( { } ) => {

  const dispatch = useDispatch();

  //Aqui va el componente de redireccionamiento.
  const continueSession = () => {
    console.log('Redireccionando a la app');
    dispatch(updateRouteState('auth'))
  }

  const removeSession = () => {
    
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


export default LoginVerified;