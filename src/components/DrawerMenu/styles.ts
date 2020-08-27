import styled , { css } from "styled-components/native";

const DrawerMenuContainer = styled.View`
  flex: 1;
  background-color: #F8B83E;
`;

const DrawerItemsContainer = styled.View`
  
`;

interface IProps {
  isBottom? : boolean
}

const DrawerItemContainerCentral = styled.View<IProps>`
  width: 80%;
  height: auto;
  margin: 0 auto;
  position: relative;

  ${({ isBottom }) => isBottom && css`
    margin-top: 58px;
  `}
`;

const DrawerItemBars = styled.View`
  width: 3px;
  height: ${58 * 4}px;
  position: absolute;
  background-color: #fff;
  top: 8px;
  left: 14px;
`;

export {
  DrawerMenuContainer,
  DrawerItemsContainer,
  DrawerItemContainerCentral,
  DrawerItemBars
}