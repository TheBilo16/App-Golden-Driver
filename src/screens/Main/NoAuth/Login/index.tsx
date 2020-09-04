import React, { useState } from 'react';
import { Content,Input,InputGroup,FormGroup,ImageInput,Logo , LogoBox} from '../styles/style'
import { firestore } from 'firebase'
import { FontAwesome } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import { TRouteState } from '../../../../types';
//Source
const logo = require('../source/logo.png');
const background = require('../source/fondo.png')


//UIComponents
import ButtonU from '../../../../UIComponents/Button';

const Login  = ( { updateRouteState } ) => {

    const fs = firestore();
    const [ choferID , setChoferID] = useState('');

    const changeChoferID = ( e : any ) : void => setChoferID(e.nativeEvent.text)

    const getInformationChofer = async (choferID) => {
      const information = await fs.collection('driver').doc(choferID).get();
      
      return {
        //resto de informacion del chofer
      }
    }

    const ingresar = async () => {
      try {
        const validation = await (await fs.collection('driver').doc(choferID).get()).exists;
        if (validation) { 
          const {  } = getInformationChofer(choferID)
          
          //Almacenar informacion del chofer en la chache.
          await AsyncStorage.multiSet([
            ['choferID',choferID],
            //resto de informacion de 
          ])
          //agregar en el account context
          updateRouteState('auth');
              
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

const mapToStateProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  updateRouteState( routeState : TRouteState ){
    dispatch({
      type : 'update-route-state',
      payload :  routeState
    })
  }
})

export default connect(mapToStateProps,mapDispatchToProps)(Login)
