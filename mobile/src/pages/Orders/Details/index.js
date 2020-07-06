import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MAIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';

import api from '~/services/api';

import {
  WhiteBackground,
  Content,
  Card,
  TitleArea,
  Title,
  Info,
  Label,
  Text,
  DatesInfo,
  Actions,
  ButtonContent,
  ButtonText,
  SubmitButton,
} from './styles';

export default function Details({ navigation }) {
  const order = navigation.getParam('order');

  const deliveryManId = useSelector((state) => state.auth.deliveryManId);

  const { id } = order;

  const street = `${order.recipient.street}, ${order.recipient.number}`;
  const address = `${street}, ${order.recipient.city} - ${order.recipient.state}, ${order.recipient.zip}`;

  const startDate = order.start_date;
  const endDate = order.end_date;

  const startDateParsed = useMemo(() => {
    if (startDate) {
      return format(parseISO(startDate), 'dd/MM/yyyy', {
        locale: pt,
      });
    }

    return null;
  }, [startDate]);

  const endDateParsed = useMemo(() => {
    if (endDate) {
      return format(parseISO(endDate), 'dd/MM/yyyy', {
        locale: pt,
      });
    }

    return null;
  }, [endDate]);

  function handleNavigateToNewProblem() {
    navigation.navigate('NewProblem', { id });
  }

  function handleNavigateToProblems() {
    navigation.navigate('Problems', { id });
  }

  function handleNavigateToConfirmDeliver() {
    navigation.navigate('ConfirmDeliver', { deliveryManId, id });
  }

  async function handleWithdrawalOrder() {
    await api.post(`deliverymans/${deliveryManId}/deliveries`, {
      order_id: id,
    });

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <WhiteBackground />
      <Content>
        <Card>
          <TitleArea>
            <FAIcon name="truck" size={20} color="#7D40E7" />
            <Title>Informações da entrega</Title>
          </TitleArea>
          <View>
            <Info>
              <Label>Destinatário</Label>
              <Text>{order.recipient && order.recipient.name}</Text>
            </Info>
            <Info>
              <Label>Endereço de entrega</Label>
              <Text>{order.recipient && address}</Text>
            </Info>
            <Info>
              <Label>Produto</Label>
              <Text>{order.product}</Text>
            </Info>
          </View>
        </Card>
        <Card>
          <TitleArea>
            <MCIcon name="calendar" size={20} color="#7D40E7" />
            <Title>Situação da entrega</Title>
          </TitleArea>
          <View>
            <Info>
              <Label>Status</Label>
              <Text>
                {order.end_date
                  ? 'Entregue'
                  : order.start_date
                  ? 'Retirada'
                  : 'Pendente'}
              </Text>
            </Info>
            <DatesInfo>
              <Info>
                <Label>Data de retirada</Label>
                <Text>{startDateParsed || '-- / -- / --'}</Text>
              </Info>
              <Info>
                <Label>Data de retirada</Label>
                <Text>{endDateParsed || '-- / -- / --'}</Text>
              </Info>
            </DatesInfo>
          </View>
        </Card>
        <Actions>
          <TouchableOpacity onPress={handleNavigateToNewProblem}>
            <ButtonContent>
              <MAIcon name="highlight-off" size={20} color="#E74040" />
              <ButtonText>Informar Problema</ButtonText>
            </ButtonContent>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigateToProblems}>
            <ButtonContent>
              <MCIcon name="information-outline" size={20} color="#E7BA40" />
              <ButtonText>Visualizar Problemas</ButtonText>
            </ButtonContent>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigateToConfirmDeliver}>
            <ButtonContent>
              <MCIcon name="check-circle-outline" size={20} color="#7D40E7" />
              <ButtonText>Confirmar Entrega</ButtonText>
            </ButtonContent>
          </TouchableOpacity>
        </Actions>
        {!order.start_date && (
          <SubmitButton onPress={handleWithdrawalOrder}>
            Marcar como retirado
          </SubmitButton>
        )}
      </Content>
    </Background>
  );
}

Details.navigationOptions = {
  title: 'Detalhes da encomenda',
};

Details.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
