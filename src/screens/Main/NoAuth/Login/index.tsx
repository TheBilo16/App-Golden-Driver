import React, { FC } from 'react';
import { Content,Input,InputGroup,FormGroup,ImageInput,Logo , LogoBox} from './style'

import { FontAwesome } from '@expo/vector-icons';

//Source
const logo = require('./source/logo.svg');
const background = require('./source/fondo.png')

//UIComponents
import ButtonU from '../../../../UIComponents/Button';


const Login  = ( { } ) => {


    function indentificar () {
        console.log("Cliked button login")
    }

    return (
        <Content source={background} >
            <LogoBox>
                <Logo source={logo}/>
            </LogoBox>
                
            <FormGroup>
                <InputGroup>
                    <Input placeholder="Usuario" />
                    <ImageInput width="50px">
                       <FontAwesome name="user" size={20} color="#F8B83E" /> 
                    </ImageInput>
                </InputGroup>
                <InputGroup>
                    <Input placeholder="Password"/>
                    <ImageInput width = "50px">
                       <FontAwesome name="lock" size={20} color="#F8B83E" /> 
                    </ImageInput>
                </InputGroup>
                <InputGroup>
                    <ButtonU 
                        width="100%"
                        onPress={indentificar}
                        text = "LogIn"
                        color="#2A5AD7"
                    />
                </InputGroup>
                
            </FormGroup>
            
        </Content>       
    )
}



export default Login;
