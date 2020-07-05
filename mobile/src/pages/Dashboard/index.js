import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { signOut } from '~/store/modules/auth/actions';

import api from '~/services/api';

import Order from '~/components/Order';

import {
  Container,
  Welcome,
  AvatarImage,
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

export default function Dashboard() {
  const dispatch = useDispatch();

  const deliveryManId = useSelector((state) => state.auth.deliveryManId);
  const deliveryManName = useSelector((state) => state.auth.deliveryMan.name);
  const deliveryManInitialLetters = useSelector(
    (state) => state.auth.deliveryMan.initialLetters
  );
  const deliveryManAvatar = useSelector(
    (state) => state.auth.deliveryMan.avatar.url
  );

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get(
        `deliverymans/${deliveryManId}/deliveries`
      );

      setOrders(response.data);
    }

    loadOrders();
  }, [deliveryManId]);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Welcome>
        {deliveryManAvatar ? (
          <AvatarImage
            source={{
              uri: deliveryManAvatar.replace('localhost', '192.168.0.2'),
            }}
          />
        ) : (
          <Avatar avatar={deliveryManAvatar}>
            {deliveryManAvatar && <Text>{deliveryManInitialLetters}</Text>}
          </Avatar>
        )}
        <User>
          <WelcomeMessage>Bem vindo de volta,</WelcomeMessage>
          <Username>{deliveryManName}</Username>
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
        data={orders}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Order data={item} />}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="view-headline" size={26} color={tintColor} />
  ),
};
