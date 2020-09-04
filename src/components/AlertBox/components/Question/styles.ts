import styled , { css } from "styled-components/native";
import { alertBoxMeasure } from "../../../../styles";

const { containerWidth } = alertBoxMeasure;

const QuestionStyles = {
  Text : styled.Text`
    text-align: center;
    color: #878787;

    ${({ main }) => main && css`
      color: #2A5AD7;
      font-weight: bold;
    `}
  `,
  Button : styled.View`
    width: ${containerWidth / 2}px;
    padding: 15px 0;

    ${({ main }) => main && css`
      border-right-width: 1px;
      border-right-color: #D9D9D9;
    `}
  `
}

export default QuestionStyles;