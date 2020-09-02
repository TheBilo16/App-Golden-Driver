import React, { FC , useContext , useState } from 'react';
import { Content,Input,InputGroup,FormGroup,ImageInput,Logo , LogoBox} from './style'
import { firestore } from 'firebase'
import { FontAwesome } from '@expo/vector-icons';
import { RouteControllerContext } from '../../../../context/RouteController';

//Source
const logo = require('./source/logo.svg');
const background = require('./source/fondo.png')


//UIComponents
import ButtonU from '../../../../UIComponents/Button';

const Login  = ( { } ) => {

    const fs = firestore();

    const { updateRouteState } = useContext(RouteControllerContext);
    const [ choferID , setChoferID] = useState('');

    const changeChoferID = ( e : any ) : void => setChoferID(e.nativeEvent.text)

    const ingresar = async () => {
      // Validar ID del chofer 
      // Cambiar el estado del TRouteState a 'auth' 
      
      try {
        console.log('Ingresando a la app...')
        console.log(choferID);
        const validation = await fs.collection('driver').where("id","==",choferID).get();
        validation.size === 1 ? updateRouteState!('auth') : console.log('ID incorrecto') 
  
      } catch (e) { console.log(e.message) }
    }



    return (
        <Content source={background} >
          <LogoBox>
            <Logo source={logo}/>
          </LogoBox>

          <FormGroup>
            <InputGroup>
              <Input placeholder="ID" onChange={changeChoferID}/>
              <ImageInput>
                <FontAwesome name="user" size={20} color="#F8B83E" /> 
              </ImageInput>    
            </InputGroup>
            <InputGroup>
              <ButtonU 
                width="100%"
                onPress={ingresar}
                text = "LogIn"
                color="#2A5AD7"
              />
            </InputGroup>    
          </FormGroup>
        </Content>       
    )
}



export default Login;
