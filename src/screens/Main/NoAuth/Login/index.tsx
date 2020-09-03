import React, { FC , useContext , useState } from 'react';
import { Content,Input,InputGroup,FormGroup,ImageInput,Logo , LogoBox} from './style'
import { firestore } from 'firebase'
import { FontAwesome } from '@expo/vector-icons';
import { RouteControllerContext } from '../../../../context/RouteController';
import { AsyncStorage } from 'react-native';

//Source
const logo = require('./source/logo.png');
const background = require('./source/fondo.png')


//UIComponents
import ButtonU from '../../../../UIComponents/Button';


const Login  = ( { } ) => {

    const fs = firestore();

    const { updateRouteState } = useContext(RouteControllerContext);
    const [ choferID , setChoferID] = useState('');

    const changeChoferID = ( e : any ) : void => setChoferID(e.nativeEvent.text)

    const ingresar = async () => {
      try {
        console.log(choferID);
        const validation = await (await fs.collection('driver').doc(choferID).get()).exists;
        if (validation) { 
          await AsyncStorage.setItem('choferID',choferID)
          updateRouteState!('auth')
        } else console.log('ID incorrecto') 

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
