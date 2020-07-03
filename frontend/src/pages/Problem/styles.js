import styled from 'styled-components';

export const Tr = styled.tr`
  td:last-child span {
    position: relative;
  }
`;

export const Span = styled.span`
  div {
    opacity: 0;
    visibility: hidden;

    transition: all 300ms;

    z-index: 10;
  }

  &.active div {
    opacity: 1;
    visibility: visible;
  }
`;
