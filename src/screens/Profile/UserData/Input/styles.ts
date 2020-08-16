import styled from "styled-components/native";

const MainContainer = styled.View`
  width: 100%;
  margin-bottom: 25px;
`;

const TextSectionContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.View`
  width: 50px;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #4A4A4A;
`;

const InputSectionContainer = styled.View`
  padding: 0 5px;
  padding-top: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #A1A1A1;
`;

const InputLabel = styled.TextInput`
  color: #A1A1A1;
  padding-bottom: 5px;
`;

export {
  MainContainer,
  TextSectionContainer,
  InputSectionContainer,
  Label,
  Icon,
  InputLabel
}