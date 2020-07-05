import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Welcome = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const AvatarImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;

  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.View`
  ${(props) => !props.avatar && 'background-color: #f4effc;'}
  width: 70px;
  height: 70px;
  border-radius: 35px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #a28fd0;
  font-size: 24px;
`;

export const User = styled.View`
  width: 200px;
`;

export const WelcomeMessage = styled.Text`
  color: #666666;
`;

export const Username = styled.Text`
  color: #444444;
  font-size: 18px;
  font-weight: bold;
`;

export const ListHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 22px;
`;

export const Title = styled.Text`
  color: #444444;
  font-size: 22px;
  font-weight: bold;
`;

export const Actions = styled.View`
  width: 150px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Pendings = styled.Text`
  color: ${(props) => (props.selected ? '#7D40E7' : '#999999')};
  font-size: 14px;
  font-weight: bold;
`;

export const Delivereds = styled.Text`
  color: ${(props) => (props.selected ? '#7D40E7' : '#999999')};
  font-size: 14px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
