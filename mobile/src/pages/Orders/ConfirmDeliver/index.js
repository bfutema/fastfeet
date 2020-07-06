import React from 'react';

import Background from '~/components/Background';

import { WhiteBackground, Content } from './styles';

export default function ConfirmDeliver() {
  return (
    <Background>
      <WhiteBackground />
      <Content />
    </Background>
  );
}

ConfirmDeliver.navigationOptions = {
  title: 'Confirmar entrega',
};
