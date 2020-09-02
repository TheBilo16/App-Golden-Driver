import styled  , { css }  from 'styled-components/native';


const widthIconInput : string = "50px";



const Content = styled.ImageBackground`
  flex:1;
`

// Formulario

const FormGroup = styled.View`
  width:80%;
  flex:1;
  alignSelf:center;
`

const Input = styled.TextInput`
  position:absolute;
  width:100%;
  backgroundColor:white;
  height:100%;
  padding:0 ${widthIconInput};
`

const ImageInput = styled.View`
  position:absolute;
  width:${widthIconInput};
  height:100%;
  justifyContent:center;
  alignItems:center;
`

const InputGroup = styled.View`
  height:50px;
  flexDirection : row;
  margin: 8px 0 ;
`

//Logo del Login

const LogoBox = styled.View`
  width:100%;
  flex:1;
  justifyContent:center;
  alignItems:center;
`

const Logo = styled.Image`
  width:80%;
  height:100px;
`

export { Content,Input,InputGroup,FormGroup,ImageInput,Logo,LogoBox };