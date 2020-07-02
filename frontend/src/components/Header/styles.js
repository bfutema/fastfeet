import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  box-shadow: 4px 4px 8px -6px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    div {
      width: 180px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;

      img {
        width: 100%;
        cursor: pointer;

        &:hover {
          filter: brightness(50%);
        }
      }
    }

    a {
      color: #999;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-right: 16px;

      &:hover {
        color: #444;
      }
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      color: #666;
    }

    form {
      margin-top: 5px;

      button {
        color: #de3b3b;
        font-size: 12px;
        text-transform: lowercase;

        &:hover {
          filter: brightness(90%);
        }
      }
    }
  }
`;
