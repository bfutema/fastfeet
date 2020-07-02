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

export const Actions = styled.div`
  margin-top: 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CustomTable = styled.table`
  width: 100%;
  margin-top: 25px;
  border-spacing: 0 15px;
  border-collapse: separate;

  thead tr th {
    color: #444444;
    text-align: left;
  }

  thead tr th:last-child,
  tbody tr td:last-child {
    text-align: right;
  }

  tbody tr td:first-child {
    border-top-left-radius: 6px;
  }

  tbody tr td:last-child {
    border-top-right-radius: 6px;
  }

  tbody tr td:first-child {
    border-bottom-left-radius: 6px;
  }

  tbody tr td:last-child {
    border-bottom-right-radius: 6px;
  }

  tbody tr {
    background-color: #fff;
  }

  thead tr th {
    padding: 0 16px;
  }

  tbody tr td:first-child {
    border-left: 1px solid #eeeeeeff;
  }

  tbody tr td:last-child {
    border-right: 1px solid #eeeeeeff;
  }

  tbody tr td {
    border-top: 1px solid #eeeeeeff;
    border-bottom: 1px solid #eeeeeeff;
    padding: 16px;
  }

  tbody tr td svg {
    cursor: pointer;
    margin-right: 10px;
  }
`;
