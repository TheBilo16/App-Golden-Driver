import styled , { css } from "styled-components/native";

interface IProps {
  isBackToScreen? : boolean
}

const HeaderMenu = styled.View<IProps>`
  width: 100%;
  height: 60px;
  padding: 0 24px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;

  ${({ isBackToScreen }) => !isBackToScreen && css`
    border-bottom-width : 2px;
    border-bottom-color: rgb(240,240,240);
    justify-content: space-between;
  `}
`;

HeaderMenu.defaultProps = {
  isBackToScreen : false
}

export default HeaderMenu;