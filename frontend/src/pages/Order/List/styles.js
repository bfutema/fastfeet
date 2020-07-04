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

export const ModalContent = styled.div`
  z-index: 777777778;

  min-width: 380px;

  span {
    color: #666;
  }

  > div {
    padding-bottom: 16px;
    max-width: 420px;

    display: flex;
    flex-direction: column;

    & + div {
      padding-top: 16px;
    }

    & + div {
      border-top: 1px solid #eee;
    }

    strong,
    span {
      margin: 4px 0;
    }

    img {
      width: 100%;
      max-height: 80px;

      margin-top: 16px;

      object-fit: contain;
    }
  }
`;

export const Dates = styled.div`
  width: 40%;
  margin-top: 8px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  strong,
  span {
    margin: 4px 0;
  }
`;
