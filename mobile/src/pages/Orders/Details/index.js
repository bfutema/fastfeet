import React from 'react';

import Background from '~/components/Background';

import { Container, Text } from './styles';

export default function Details() {
  return (
    <Background>
      <Container>
        <Text>Detalhes</Text>
      </Container>
    </Background>
  );
}

Details.navigationOptions = {
  title: 'Detalhes da encomenda',
};
