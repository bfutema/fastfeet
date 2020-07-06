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
  padding: 12px;
  margin-bottom: 10px;
`;

export const TitleArea = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  color: #7d40e7;
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`;

export const Info = styled.View`
  margin: 6px 0;
`;

export const Label = styled.Text`
  color: #999999;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

export const Text = styled.Text`
  color: #666666;
  font-size: 14px;
`;

export const DatesInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Actions = styled.View`
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: #0000001a;
  justify-content: space-between;
  flex-direction: row;
`;

export const ButtonContent = styled.View`
  background-color: #f8f9fd;
  align-items: center;
  justify-content: center;
  max-width: 105px;
  padding: 12px 22px;
`;

export const ButtonText = styled.Text`
  color: #999999;
  font-size: 12px;
  text-align: center;
`;

export const SubmitButton = styled(Button)`
  background-color: #7d40e7;
  margin-top: 10px;
`;
