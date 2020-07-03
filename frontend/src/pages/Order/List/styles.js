import styled from 'styled-components';
import { lighten } from 'polished';

export const Tr = styled.tr`
  td:last-child span {
    position: relative;
  }
`;

export const Avatar = styled.div`
  width: 28px;
  height: 28px;
  background-color: ${(props) => lighten(0.25, `${props.color}`)};
  border-radius: 50%;
  font-size: 12px;
  margin-right: 10px;
  vertical-align: middle;
  display: inline-block;
  padding: 7px 0;
  text-align: center;
  color: ${(props) => props.color};
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
