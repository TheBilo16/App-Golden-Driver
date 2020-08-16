import styled from "styled-components/native";

const HeaderMenu = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 24px;
  background-color: #fff;
  border-bottom-width : 1px;
  border-bottom-color: #C4C4C4;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ScreenTitle = styled.Text`
  font-size: 15px;
`;

const ChatIconContainer = styled.View`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  background-color: #F8B83E;
  justify-content: center;
  align-items: center;
`;

export {
  HeaderMenu,
  ScreenTitle,
  ChatIconContainer
}