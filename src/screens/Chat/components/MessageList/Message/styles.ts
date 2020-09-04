import styled , { css } from "styled-components/native";

const MessageStyles = {
  Container : styled.View`
    max-width: 70%;
    background-color: #fff;
    padding: 10px;
    align-self: flex-start;
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    margin: 5px 10px;

    ${({ isChofer }) => isChofer && css`
      align-self: flex-end;
    `}
  `,
  AuthorTitle : styled.Text`
    color: #1D4ABC;
    font-size: 12px;
    font-weight: bold;
    padding-bottom: 10px;
  `
} 

export default MessageStyles;