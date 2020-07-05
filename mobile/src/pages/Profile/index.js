import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  AvatarImage,
  Avatar,
  FormGroup,
  Label,
  Text,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.auth.deliveryMan.name);
  const email = useSelector((state) => state.auth.deliveryMan.email);
  const createdAt = useSelector((state) => state.auth.deliveryMan.createdAt);
  const initialLetters = useSelector(
    (state) => state.auth.deliveryMan.initialLetters
  );
  const avatar = useSelector((state) => state.auth.deliveryMan.avatar.url);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      {avatar ? (
        <AvatarImage
          source={{
            uri: avatar.replace('localhost', '192.168.0.2'),
          }}
        />
      ) : (
        <Avatar avatar={avatar}>
          {avatar && <Text>{initialLetters}</Text>}
        </Avatar>
      )}
      <FormGroup>
        <Label>Nome completo</Label>
        <Text>{name}</Text>
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Text>{email}</Text>
      </FormGroup>
      <FormGroup>
        <Label>Data de cadastro</Label>
        <Text>{createdAt}</Text>
      </FormGroup>
      <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle" size={26} color={tintColor} />
  ),
};
