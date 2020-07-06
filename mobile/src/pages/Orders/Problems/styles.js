import styled from 'styled-components';

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

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
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
`;

export const Text = styled.Text`
  color: #999999;
  font-size: 16px;
`;

export const Date = styled.Text`
  color: #c1c1c1;
  font-size: 12px;
`;
