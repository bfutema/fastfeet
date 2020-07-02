import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 4px;
  padding: 8px 16px;

  display: inline-block;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.span`
  color: ${(props) => props.fontColor};
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: ${(props) => (props.fontWeight === 'bold' ? 'bold' : 'normal')};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: 5px;
`;
