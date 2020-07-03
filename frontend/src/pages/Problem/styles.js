import styled from 'styled-components';
import { lighten } from 'polished';

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
