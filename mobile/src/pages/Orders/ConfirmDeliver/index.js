import React from 'react';

import Background from '~/components/Background';

import { WhiteBackground, Content, Card, SubmitButton } from './styles';

export default function ConfirmDeliver() {
  return (
    <Background>
      <WhiteBackground />
      <Content>
        <Card />
        <SubmitButton>Enviar</SubmitButton>
      </Content>
    </Background>
  );
}

ConfirmDeliver.navigationOptions = {
  title: 'Confirmar entrega',
};
