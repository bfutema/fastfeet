import React from 'react';

import Background from '~/components/Background';

import { WhiteBackground, Content, Title, Card, Text, Date } from './styles';

export default function Problems() {
  return (
    <Background>
      <WhiteBackground />
      <Content>
        <Title>Encomenda 01</Title>
        <Card>
          <Text>Destinatário ausente</Text>
          <Date>14/01/2020</Date>
        </Card>
        <Card>
          <Text>Destinatário ausente</Text>
          <Date>14/01/2020</Date>
        </Card>
      </Content>
    </Background>
  );
}

Problems.navigationOptions = {
  title: 'Visualizar problemas',
};
