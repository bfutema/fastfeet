import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 8px;
    left: 10px;
  }
`;

export const Input = styled.input`
  color: #444444;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: ${(props) => `${props.width}px`};
  padding: 8px 16px 8px 34px;

  &:hover {
    border: 1px solid var(--primary-color);
  }

  &::placeholder {
    color: #999999;
  }
`;
