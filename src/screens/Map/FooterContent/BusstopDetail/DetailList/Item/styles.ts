import styled from "styled-components/native";

const ContainerItemList = styled.View`
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: #F2F2F2;
`;

const TitleArea = styled.Text`
  color: #4A4A4A;
  font-size: 13.5px;
  font-weight: bold;
`;

interface IProps {
  isNavigator : boolean
}

const DescriptionArea = styled.Text<IProps>`
  color: #A1A1A1;
  font-size: 10px;
  padding-right: ${({ isNavigator }) => !isNavigator ? '80px' : '0px'};
  margin-top: 2px;
`;

export {
  ContainerItemList,
  TitleArea,
  DescriptionArea
}