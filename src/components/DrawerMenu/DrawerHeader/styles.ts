import styled from "styled-components/native";

const DrawerImageBusContainer = styled.View`
  align-items: center;
  padding: 25px 0;
`;

const DrawerImageBus = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border-width: 3px;
  border-color: #fff;
`;

const DrawerImageTextContainer = styled.View`
  padding-top: 10px;
`;

const DrawerImageTitle = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

const DrawerImageInformation = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 12px;
  margin-top: 3px;
`;

export {
  DrawerImageBus,
  DrawerImageBusContainer,
  DrawerImageInformation,
  DrawerImageTextContainer,
  DrawerImageTitle
}