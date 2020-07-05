import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Order from '~/components/Order';

import {
  Container,
  Welcome,
  Avatar,
  Text,
  WelcomeMessage,
  Username,
  User,
  ListHeader,
  Title,
  Actions,
  Pendings,
  Delivereds,
  List,
} from './styles';

const data = [1, 2, 3];

export default function Dashboard() {
  function handleLogout() {}

  return (
    <Container>
      <Welcome>
        <Avatar>
          <Text>GA</Text>
        </Avatar>
        <User>
          <WelcomeMessage>Bem vindo de volta,</WelcomeMessage>
          <Username>Gaspar Antunes</Username>
        </User>
        <TouchableOpacity onPress={handleLogout}>
          <Icon name="input" size={26} color="#E74040" />
        </TouchableOpacity>
      </Welcome>
      <ListHeader>
        <Title>Entregas</Title>
        <Actions>
          <TouchableOpacity>
            <Pendings selected>Pendentes</Pendings>
          </TouchableOpacity>
          <TouchableOpacity>
            <Delivereds>Entregues</Delivereds>
          </TouchableOpacity>
        </Actions>
      </ListHeader>
      <List
        data={data}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Order data={item} />}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="view-headline" size={26} color={tintColor} />
  ),
};
