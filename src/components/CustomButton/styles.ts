import styled from "styled-components/native";

interface IProps {
  horizontalSize : string
}

let regExp : RegExp = /^([0-9]{1,3})%$/

const ButtonContainer = styled.View<IProps>`
  width : ${({ horizontalSize }) => regExp.test(horizontalSize) ? horizontalSize : '90%' };
  min-width: 250px;
  height: 46px;
  background-color: #2A5AD7;
  align-items: center;
  justify-content: center;
  border-radius: 23px;
  flex-direction: row;
`;

const IconContainer = styled.View`
  margin-right: 10px;
  line-height: 0;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export {
  ButtonContainer,
  ButtonText,
  IconContainer
}