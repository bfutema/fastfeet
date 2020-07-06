import React from 'react';

import Background from '~/components/Background';

import { WhiteBackground, Content } from './styles';

export default function NewProblem() {
  return (
    <Background>
      <WhiteBackground />
      <Content />
    </Background>
  );
}

NewProblem.navigationOptions = {
  title: 'Informar problema',
};
