import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;

  padding: 26px 16px;

  strong {
    color: #444;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin-left: 20px;
  }
`;

export const BackgroundCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 28px;
  margin-top: 25px;
`;
