import { Dimensions } from 'react-native';
import styled from "styled-components/native";

const { width , height } = Dimensions.get("screen");

const Container = styled.View`
  width: ${width}px;
  height: ${height}px;
  background-color: rgba(0,0,0,.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

export {
  Container
}