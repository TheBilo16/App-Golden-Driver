import React, { useState } from 'react';
import { Content,Input,InputGroup,FormGroup,ImageInput,Logo , LogoBox} from '../styles/style'
import { firestore } from 'firebase'
import { FontAwesome } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

//Source
const logo = require('../source/logo.png');
const background = require('../source/fondo.png')

//REDUX
import { useDispatch } from 'react-redux';
import { updateRouteState } from '../../../../redux/actions/RouterActions';
import { updateDataChofer } from '../../../../redux/actions/AccountActions';

//UIComponents
import ButtonU from '../../../../UIComponents/Button';

const Login  = ( ) => {

    const dispatch = useDispatch()
    const fs = firestore();
    const [ choferID , setChoferID] = useState('');

    const changeChoferID = ( e : any ) : void => setChoferID(e.nativeEvent.text)

    const getInformationChofer = async (choferID) => {
      const information = await fs.collection('driver').doc(choferID).get();
      
      console.log(information.data)

    }

    const ingresar = async () => {
      try {
        const validation = await (await fs.collection('driver').doc(choferID).get()).exists;
        if (validation) { 
          const {  } = getInformationChofer(choferID)

          const dataChofer = {
            id : choferID,
            name : '',
            lastName:'',
            timeLogin:'',
          }

          await AsyncStorage.multiSet([
            ['choferID',choferID],
            ['dataChofer',JSON.stringify(dataChofer)]
          ])
          dispatch(updateRouteState('auth'));
      
          dispatch(updateDataChofer({
              timeLogin : new Date(),
              choferID : '',
              lastName : '',
              name : ''
          }))

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
