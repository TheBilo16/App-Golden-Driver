import styled , { css } from "styled-components/native";
import { headerMenuMeasure } from "../../../styles";

interface IProps {
  isBackToScreen? : boolean
}

const HeaderMenu = styled.View<IProps>`
  width: 100%;
  height: ${headerMenuMeasure.height}px;
  padding: 0 18px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ isBackToScreen }) => !isBackToScreen && css`
    border-bottom-width : 2px;
    border-bottom-color: rgb(240,240,240);
    padding: 0 24px;
  `}
`;

HeaderMenu.defaultProps = {
  isBackToScreen : false
}

export default HeaderMenu;