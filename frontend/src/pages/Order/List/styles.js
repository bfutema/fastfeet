import styled from 'styled-components';
import { lighten } from 'polished';

export const Avatar = styled.div`
  width: 28px;
  height: 28px;
  background-color: ${(props) => lighten(0.25, `${props.color}`)};
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
  display: inline-block;
  padding: 5px;
  text-align: center;
  color: ${(props) => props.color};
`;
