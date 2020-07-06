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

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
