import styled from "styled-components/native";

const ContainerItem = styled.View`
  width: 100%;
  flex-direction: row;
`
const ChildrenContainer = styled.View`
  flex: 1;
`;

interface IProps {
  horizontalSize : number
}

const ItemIconContainer = styled.View<IProps>`
  width: ${({ horizontalSize }) => horizontalSize}px;
  min-width: ${({ horizontalSize }) => horizontalSize}px;
  justify-content: center;
  align-items: center;
`;

export {
  ContainerItem,
  ItemIconContainer,
  ChildrenContainer
}