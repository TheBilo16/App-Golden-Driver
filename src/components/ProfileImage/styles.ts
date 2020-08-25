import styled from 'styled-components/native';

interface IPropsImage {
  width : number,
  height : number
}

const UserImage = styled.Image<IPropsImage>`
  width: ${({ width }) => width + 'px'};
  height : ${({ height }) => height + 'px'};
  border-radius: ${({ width }) => (width / 2) + 'px'};
`;

export {
  UserImage
}