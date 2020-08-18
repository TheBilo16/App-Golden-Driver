import React, { FC } from 'react';
import { Content,Input,InputGroup,FormGroup,ImageInput } from './style'

//Source
const imageBack = require('./source/imageBackLogin.svg')

//UIComponents
import ButtonU from '../../../../UIComponents/Button';


const Login  = ( { } ) => {

    const image : Object = { uri : "https://www.digital55.com/wp-content/uploads/2019/07/%C2%BFQue%CC%81-cualidades-debe-tener-un-desarrollador-especialista-en-React.png" } 


    function indentificar () {
        console.log("Cliked button login")
    }


    return (
        <Content source={image}>
            <FormGroup>
                <InputGroup>
                    <ImageInput source={image} />
                    <Input placeholder="Usuario" />
                </InputGroup>
                <InputGroup>
                    <ImageInput source={image}/>
                    <Input placeholder="Password" />
                </InputGroup>
                <InputGroup>
                    <ButtonU 
                        onPress={indentificar}
                        text = "LogIn"
                    />
                </InputGroup>
                
            </FormGroup>
            
        </Content>       
    )
}



export default Login;
