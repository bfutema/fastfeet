import styled from 'styled-components';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;

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

export const FormGroup = styled.View`
  align-self: stretch;
  margin: 12px 0;
  padding: 0 40px;
`;

export const Label = styled.Text`
  color: #666666;
  font-size: 14px;
`;

export const Text = styled.Text`
  color: #444444;
  font-size: 18px;
  font-weight: bold;
`;

export const LogoutButton = styled(Button)`
  background-color: #e74040;
  align-self: stretch;
  margin: 20px 40px 0 40px;
`;
