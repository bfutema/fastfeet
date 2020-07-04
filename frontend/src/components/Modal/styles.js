import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;

  z-index: 777777777;

  opacity: 0;
  visibility: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 400ms;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

export const CardModal = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 26px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
