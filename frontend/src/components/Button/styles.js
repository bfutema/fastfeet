import styled from 'styled-components';

export const CustomButton = styled.button`
  background-color: ${(props) => props.color};
  border-radius: 4px;
  padding: 8px 16px;

  display: inline-block;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;

export const Container = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 4px;
  padding: 8px 16px;

  display: inline-block;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;
