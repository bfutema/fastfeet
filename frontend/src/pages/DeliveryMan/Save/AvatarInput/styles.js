import styled from 'styled-components';

export const Container = styled.div`
  border: 1px dashed rgba(0, 0, 0, 0.2);
  border-radius: 50%;

  width: 150px;
  height: 150px;

  margin: 16px 0;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
