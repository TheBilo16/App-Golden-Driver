import styled  , { css }  from 'styled-components/native';


const Content = styled.ImageBackground`
<<<<<<< HEAD
    flex:1;
`

// Formulario

const FormGroup = styled.View`
    width:80%;
    flex:1;
=======
    height:100vh;
    align-items:center;
    flex-flow:column nowrap;
>>>>>>> d47e3caadf23399a28194a49b330c14611273a0d
`

const Input = styled.TextInput`
    backgroundColor:white;
    height:100%;
    padding:5px;
    flex:9;
`

const ImageInput = styled.View`
    height:100%;
    flex:1;
`

const InputGroup = styled.View`
    flex:1;
    flexDirection : row;
`

//Logo del Login

const LogoBox = styled.View`
    width:100%;
    flex:1;
`

const Logo = styled.Image`
    width:80%;
    height:100px;
`

export { Content,Input,InputGroup,FormGroup,ImageInput,Logo,LogoBox };