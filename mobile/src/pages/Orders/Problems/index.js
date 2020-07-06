import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import Problem from '~/components/Problem';

import api from '~/services/api';

import { WhiteBackground, Content, Title, List } from './styles';

export default function Problems({ navigation }) {
  const orderId = navigation.getParam('id');

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`delivery/${orderId}/problems`);

      setProblems(response.data);
    }

    loadProblems();
  }, [orderId]);

  return (
    <Background>
      <WhiteBackground />
      <Content>
        <Title>Encomenda {orderId}</Title>
        <List
          data={problems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Problem data={item} />}
        />
      </Content>
    </Background>
  );
}

Problems.navigationOptions = {
  title: 'Visualizar problemas',
};

Problems.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
