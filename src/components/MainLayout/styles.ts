import styled from 'styled-components/native';
import { headerMenuMeasure } from '../../styles';

const MainContainer = styled.View`
  flex: 1;
  background-color: #fff;
  margin-top: ${headerMenuMeasure.paddingTop}px;
`;

const Content = styled.View`
  flex: 1;
`;

export {
  MainContainer,
  Content
}