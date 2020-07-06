import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

import Background from '~/components/Background';

import api from '~/services/api';

import { WhiteBackground, Content, Card, TInput, SubmitButton } from './styles';

export default function NewProblem({ navigation }) {
  const orderId = navigation.getParam('id');

  const deliveryman_id = useSelector((state) => state.auth.deliveryManId);

  const [description, setDescription] = useState('');

  async function handleAddProblem() {
    try {
      await api.post(`delivery/${orderId}/problems`, {
        description,
        deliveryman_id,
      });

      Alert.alert('Obrigado por informar este problema.');
    } catch (err) {
      Alert.alert('Não foi possível informar este problema.');
    }
  }

  return (
    <Background>
      <WhiteBackground />
      <Content>
        <Card>
          <TInput
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            numberOfLines={10}
            multiline
            onChangeText={setDescription}
            value={description}
          />
        </Card>
        <SubmitButton onPress={handleAddProblem}>Enviar</SubmitButton>
      </Content>
    </Background>
  );
}

NewProblem.navigationOptions = {
  title: 'Informar problema',
};

NewProblem.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
