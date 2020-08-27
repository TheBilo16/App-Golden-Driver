import styled , { css } from "styled-components/native";
import { TBusStopState } from "../../../../../types";

const TopTitleContainer = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #E8E6E6;
  padding: 18px 0;
`;

const TitleBusStop = styled.Text`
  font-size: 14.5px;
  font-weight: bold;
  color: rgba(0,0,0,.64);
`;


//Mensaje de estado del paradero
interface IPropsWarningMessage {
  busStopState : TBusStopState
}

const WarningMessage = styled.Text<IPropsWarningMessage>`
  width: 85px;
  padding: 1px 0;
  color: #fff;
  border-radius: 25px;
  font-size: 9px;
  text-align: center;
  margin-top: 8px;

  ${({ busStopState }) => {
    let styles : string = '';

    switch(busStopState){
      case 'completed':
        styles = 'background-color: #6BCF9F';
        break;
      case 'in-process':
        styles = 'background-color: #2A5AD7';
        break;
      case 'delay':
        styles = 'background-color: #FE7557';
        break;
    }

    return css`${styles}`;
  }}
`;

export {
  TopTitleContainer,
  TitleBusStop,
  WarningMessage
}