import styled  , { css }  from 'styled-components/native';

const Content = styled.ImageBackground`
    flex:1
`
const Input = styled.TextInput`
    width:70%,
    height:100%,
    backgroundColor:white,
    padding:10
`

const InputGroup = styled.View`
    flexDirection:row,
    flexWrap : nowrap,
    width:80%,
    height:40,
    marginTop:10
`
const ImageInput = styled.Image`
    width:30%,
    height:100%
`

const FormGroup = styled.View`
    top:50%,
    width:100%,
    height:50%,
    alignItems:center
`


const formGroup = {
    top:"50%",
    width:"100%",
    height:"50%",
    alignItems:"center"
}


export { Content,Input,InputGroup,FormGroup,ImageInput };