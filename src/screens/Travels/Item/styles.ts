import styled from "styled-components/native";
import { TTravelState } from "../../../types";

const horizontalSize = '80px';

const ItemContainer = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #D9D9D9;
  padding: 20px 0;
`;

const ItemCentered = styled.View`
  width: ${horizontalSize};
  align-items: center;
  justify-content: center;
`;

const ItemInformation = styled.View`
  width: calc(100% - calc(${horizontalSize} * 2));
`;

const ItemTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #4A4A4A;
`;

const ItemSubtitle = styled.Text`
  font-size: 11px;
  color: #A1A1A1;
  margin-top: 3px;
`;

//Circle Indicator
interface IIndicator {
  state : TTravelState
}

const Indicator = styled.View<IIndicator>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid ${p => p.state === 'completed' ? '#B0F5D4' : '#D9D9D9'};
  background-color: ${p => p.state === 'completed' ? '#6BCF9F' : '#fff'};
`;

export {
  ItemContainer,
  ItemCentered,
  Indicator,
  ItemInformation,
  ItemTitle,
  ItemSubtitle
}