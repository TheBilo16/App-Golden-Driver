import styled from "styled-components/native";

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

const WarningMessage = styled.Text`
  width: 85px;
  padding: 1px 0;
  background-color: #6BCF9F;
  color: #fff;
  border-radius: 25px;
  font-size: 9px;
  text-align: center;
  margin-top: 8px;
`;

export {
  TopTitleContainer,
  TitleBusStop,
  WarningMessage
}