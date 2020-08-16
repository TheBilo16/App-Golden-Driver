import styled from 'styled-components/native';
import { Image } from 'react-native';

interface IPropsImage {
  width : string,
  height : string
}

const UserImage = styled.Image<IPropsImage>`
  width: ${p => p.width};
  height : ${p => p.height};
  border-radius: 50%;
  object-fit: contain;
`;

export {
  UserImage
}