import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Dimensions, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();

  const [isPortrait, setIsPortrait] = useState(true);
  const [width, setWidth] = useState(Dimensions.get('window').width);

  const deliveryManId = useSelector((state) => state.auth.deliveryManId);
  const deliveryManName = useSelector((state) => state.auth.deliveryMan.name);
  const deliveryManInitialLetters = useSelector(
    (state) => state.auth.deliveryMan.initialLetters
  );
  const deliveryManAvatar = useSelector(
    (state) => state.auth.deliveryMan.avatar.url
  );

  const [orders, setOrders] = useState([]);
  const [hasFilter, setHasFilter] = useState(false);

  Dimensions.addEventListener('change', () => {
    const { width: deviceWidth } = Dimensions.get('window');

    setWidth(deviceWidth);
    // setIsPortrait(!isPortrait);
  });

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get(
        `deliverymans/${deliveryManId}/deliveries`
      );

      setOrders(response.data);
    }

    loadOrders();
  }, [deliveryManId]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get(
        `deliverymans/${deliveryManId}/deliveries${
          hasFilter ? '?delivered=true' : ''
        }`
      );

      setOrders(response.data);
    }

    loadOrders();
  }, [deliveryManId, hasFilter]);

  function handleFilter(delivered) {
    if (delivered) {
      setHasFilter(true);
    } else {
      setHasFilter(false);
    }
  }

  function handleNavigate(order) {
    navigation.navigate('Details', { order });
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      {isPortrait && (
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
            <Icon name="login-variant" size={26} color="#E74040" />
          </TouchableOpacity>
        </Welcome>
      )}
      <ListHeader>
        <Title>Entregas</Title>
        <Actions>
          <TouchableOpacity onPress={() => handleFilter(false)}>
            <Pendings selected={!hasFilter}>Pendentes</Pendings>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFilter(true)}>
            <Delivereds selected={!!hasFilter}>Entregues</Delivereds>
          </TouchableOpacity>
        </Actions>
      </ListHeader>
      <List
        data={orders}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Order data={item} width={width} handleNavigate={handleNavigate} />
        )}
      />
    </Container>
  );
}

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
