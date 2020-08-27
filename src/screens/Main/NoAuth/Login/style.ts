import styled  , { css }  from 'styled-components/native';



const Content = styled.ImageBackground`
    height:100vh;
    align-items:center;
    flex-flow:column nowrap;
`

const Input = styled.TextInput`
    width:100%;
    height:100%;
    background-color:white;
    padding:10px;
`

const ImageInput = styled.View`
    width:10%;
    height:100%;
    justify-content:center;
    align-items:center;
`

const InputGroup = styled.View`
    flex-flow:row nowrap;
    width:80%;
    height:40;
    margin-top:10px;
`


const FormGroup = styled.View`
    width:100%;
    height:50%;
    align-items:center;
`

const LogoBox = styled.View`
    width:100%;
    height:40%;
    justify-content:center;
    align-items:center;
`

const Logo = styled.Image`
    width:80%;
    height:100px;
`

export { Content,Input,InputGroup,FormGroup,ImageInput,Logo,LogoBox };