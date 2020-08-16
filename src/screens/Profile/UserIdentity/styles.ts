import styled from "styled-components/native";

const MainContent = styled.View`
  align-items: center;
`;

const ImageContainerBorder = styled.View`
  width: 215px;
  height: 215px;
  align-items: center;
  margin: 30px 0;
  justify-content: center;
  border: 3px solid #F8B83E;
  border-radius: 50%;
`;

const UsernameContainer = styled.View`
  width: 100%;
  background-color: #F4F4F4; 
  padding: 20px 0;
  text-align: center;
`;

const Username = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: #4A4A4A;
`;

export {
  MainContent,
  ImageContainerBorder, 
  UsernameContainer,
  Username
}