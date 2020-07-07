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

export const Pagination = styled.div`
  width: 150px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Page = styled.div`
  background-color: ${(props) =>
    props.active ? 'var(--primary-color)' : '#ddd'};
  color: ${(props) => (props.active ? '#fff' : '#777')};
  width: 20px;
  height: 26px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  & + div {
    margin-left: 5px;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;
