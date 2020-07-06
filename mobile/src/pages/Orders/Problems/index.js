import React from 'react';

import Background from '~/components/Background';

import { WhiteBackground, Content } from './styles';

export default function Problems() {
  return (
    <Background>
      <WhiteBackground />
      <Content />
    </Background>
  );
}

Problems.navigationOptions = {
  title: 'Visualizar problemas',
};
