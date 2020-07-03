import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 140px;

  left: calc(50% - 70px);
  top: calc(100% + 10px);
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #00000026;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 6px;

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  z-index: 1000;

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: #fff;
    transform: rotate(45deg);
    top: -5px;
    left: calc(50% - 10px);
    box-shadow: -2px -2px 5px -2px rgba(0, 0, 0, 0.5);
  }
`;

export const Action = styled.div`
  width: 100%;
  color: #999999;

  padding: 8px 16px 8px 8px;

  display: flex;

  & + & {
    border-top: 1px solid #eeeeee;
  }

  &:hover {
    filter: brightness(90%);
    cursor: pointer;
  }

  a,
  button {
    color: ${(props) => props.color};

    &:hover {
      color: ${(props) => lighten(0.3, `${props.color}`)};
    }
  }
`;
