import styled , { css } from "styled-components/native";

interface IProps {
  isMoreInformation : boolean
}

const BottomContent = styled.View<IProps>`
  padding: 20px 25px;
  flex-direction: row;
  align-items: center;

  ${({ isMoreInformation }) => isMoreInformation && css`
    border-top-width: 1px;
    border-top-color: #E8E6E6;
  `}
`;

const IconContainer = styled.View`
  margin-right: 8px;
  line-height: 0;
`;

const CustomText = styled.Text`
  font-size: 13px;
  color: #F8B83E;
`;

export {
  BottomContent,
  IconContainer,
  CustomText
}