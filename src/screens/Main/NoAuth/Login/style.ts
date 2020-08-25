import styled  , { css }  from 'styled-components/native';

const Content = styled.ImageBackground`
    flex:1;
`
const Input = styled.TextInput`
    width:70%;
    height:100%;
    background-color:white;
    padding:10px;
`;

const InputGroup = styled.View`
    flex-direction:row;
    flex-wrap : nowrap;
    width:80%;
    height:40px;
    margin-top:10px;
`
const ImageInput = styled.Image`
    width:30%;
    height:100%;
`

const FormGroup = styled.View`
    top:50%;
    width:100%;
    height:50%;
    align-items:center;
`


const formGroup = {
    top:"50%",
    width:"100%",
    height:"50%",
    alignItems:"center"
}


export { Content,Input,InputGroup,FormGroup,ImageInput };