import styled from "styled-components/native";

const SendMessageAreaStyles = {
  Container : styled.View`
    width: 100%;
    height: 70px;
    border-top-width: 1px;
    border-top-color: #D9D9D9;
    padding: 0 10px;
    justify-content: center;
  `,
  ContainerElements : styled.View`
    height: 40px;
    flex-direction: row;
  `,
  ContainerMessageAction : styled.View`
    flex: 1;
    height: 100%;
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    flex-direction: row;
    margin-right: 10px;
  `,
  ContainerIcon : styled.View`
    width: 50px;
    height: 100%;
    border-right-color: #D9D9D9;
    border-right-width: 1px;
    justify-content: center;
    align-items: center;
  `,
  ContainerInput : styled.View`
    height: 100%;
  `,
  InputMessage : styled.TextInput`
    width: 100%;
    height: 100%;
    padding: 0 10px;
  `,
  ContainerMessageSend : styled.View`
    width: 60px;
    border-radius: 8px;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: #2A5AD7;
  `
}

export default SendMessageAreaStyles;