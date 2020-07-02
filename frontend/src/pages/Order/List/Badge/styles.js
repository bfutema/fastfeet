/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) =>
    props.status === 'delivered'
      ? '#2CA42B'
      : props.status === 'pending'
      ? '#C1BC35'
      : props.status === 'withdrawal'
      ? '#4D85EE'
      : '#DE3B3B'};
  background-color: ${(props) =>
    props.status === 'delivered'
      ? '#dff0df'
      : props.status === 'pending'
      ? '#f0f0df'
      : props.status === 'withdrawal'
      ? '#bad2ff'
      : '#fab0b0'};
  border-radius: 16px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  display: inline-block;
  padding: 4px 8px;

  div {
    width: 9px;
    height: 9px;
    background-color: ${(props) =>
      props.status === 'delivered'
        ? '#2CA42B'
        : props.status === 'pending'
        ? '#C1BC35'
        : props.status === 'withdrawal'
        ? '#4D85EE'
        : '#DE3B3B'};
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
  }
`;
