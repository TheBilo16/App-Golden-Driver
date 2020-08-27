import styled from "styled-components/native";

const DrawerItemContainer = styled.View`
  width: 100%;
  height: 48px;
  margin-bottom: 10px;
  /* background-color: #FBBD44; */
  flex-direction: row;
  align-items: center;
`;

const DrawerItemIconContainer = styled.View`
  width: 32px;
  height: 32px;
  background-color: #ffF;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

const DrawerItemText = styled.Text`
  color: #ffF;
  font-weight: bold;
  font-size: 14px;
  margin-left: 15px;
`;

export {
  DrawerItemContainer,
  DrawerItemIconContainer,
  DrawerItemText
}