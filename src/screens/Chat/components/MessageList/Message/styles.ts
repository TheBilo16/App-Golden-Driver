import styled , { css } from "styled-components/native";

const Message = {
  Container : styled.View`
    max-width: 70%;
    background-color: #F8B83E;
    padding: 10px 15px;
    align-self: flex-start;
    border-radius: 10px;
    margin: 0 10px;
    margin-top: 10px;

    ${({ isChofer }) => isChofer && css`
      align-self: flex-end;
      background-color: #4A4A4A;
    `}
  `,
  Text : styled.Text`
    color: #fff;
  `
} 

export default Message;