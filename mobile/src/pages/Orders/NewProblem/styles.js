import styled from 'styled-components';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const WhiteBackground = styled.SafeAreaView`
  margin-top: 140px;
  background-color: #fff;
  flex: 1;
`;

export const Content = styled.View`
  position: absolute;
  top: 60px;
  width: 100%;
  padding: 0 20px;
`;

export const Card = styled.View`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 10px;
`;

export const TInput = styled(Input)`
  height: 300px;
  align-items: flex-start;
  padding: 0;
`;

export const SubmitButton = styled(Button)`
  background-color: #7d40e7;
  margin-top: 10px;
`;
