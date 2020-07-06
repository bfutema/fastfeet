import styled from 'styled-components';

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
  padding: 16px 12px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 492px;
`;

export const CameraArea = styled.View`
  flex: 1;
  flex-direction: column;
  /* background-color: #000; */

  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  /* padding: 16px 12px; */
  /* margin-bottom: 10px; */
  /* flex-direction: row; */
  /* align-items: center; */
  /* justify-content: space-between; */
  height: 426px;
`;

export const SubmitButton = styled(Button)`
  background-color: #7d40e7;
  margin-top: 10px;
`;
