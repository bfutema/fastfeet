import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  width: 100%;

  margin-bottom: 16px;

  display: grid;
  grid-template-columns: 1fr;

  div {
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    select,
    input {
      color: #444444;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      width: ${(props) => `${props.width}px`};
      padding: 8px 16px;

      &:hover {
        border: 1px solid var(--primary-color);
      }

      &::placeholder {
        color: #999999;
      }
    }
  }
`;

export const FormGroupGrid = styled.div`
  width: 100%;

  margin-bottom: 16px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;

  div {
    label {
      display: block;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    select,
    input {
      display: block;
      color: #444444;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      /* width: ${(props) => `${props.width}px`}; */
      width: 100%;
      padding: 8px 16px;

      &:hover {
        border: 1px solid var(--primary-color);
      }

      &::placeholder {
        color: #999999;
      }
    }
  }
`;
