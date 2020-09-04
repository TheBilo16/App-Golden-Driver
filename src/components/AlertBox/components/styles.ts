import styled from "styled-components/native";
import { alertBoxMeasure , alertBoxPosition } from "../../../styles";

const paddingHorizontal = 25;
const { containerWidth, containerHeight } = alertBoxMeasure;
const { left , top } = alertBoxPosition;

const AlertBox = {
  MainContainer : styled.View`
    width: ${containerWidth}px;
    height: ${containerHeight}px;
    margin: auto;
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    z-index: 11;
    border-radius: 20px;
    background: #fff;
    border: 1px solid #D9D9D9;
  `,
  ContainerTitle : styled.View`
    padding: 18px ${paddingHorizontal}px;
    border-bottom-width: 1px;
    border-bottom-color: #D9D9D9;
  `,
  Title : styled.Text`
    font-weight : bold;
    font-size: 16px;
    color: #4A4A4A;
  `,
  ContainerMessage : styled.View`
    flex: 1;
    padding: 0 ${paddingHorizontal}px;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: #D9D9D9;
  `,
  Message : styled.Text`
    color: #777777;
  `,
  ContainerButtons : styled.View`
    flex-direction: row;
  `,
}

export default AlertBox;