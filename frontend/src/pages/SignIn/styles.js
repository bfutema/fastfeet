import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  background-color: #fff;
  border-radius: 4px;
  padding: 46px 26px;

  img {
    width: 220px;
  }

  form {
    text-align: left;

    display: flex;
    flex-direction: column;
    margin-top: 30px;

    div {
      display: flex;
      flex-direction: column;

      & + div {
        margin-top: 10px;
      }
    }

    label {
      color: #444444;
      font-weight: bold;
      text-transform: uppercase;
      margin: 4px 0;
    }

    input {
      border: 1px solid #dddddd;
      border-radius: 4px;
      margin: 4px 0;
      padding: 8px;

      &::placeholder {
        color: #999999;
      }
    }

    span {
      color: #f64c75;
      font-weight: bold;
      margin: 0 0 10px;
    }

    button {
      color: #fff;
      border-radius: 4px;
      background-color: var(--primary-color);
      font-weight: 500;
      letter-spacing: 0.8px;
      margin-top: 10px;
      padding: 10px;
      position: relative;
    }
  }
`;
