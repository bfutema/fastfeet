import React from 'react';

import Background from '~/components/Background';

import { WhiteBackground, Content, Card, TInput, SubmitButton } from './styles';

export default function NewProblem() {
  return (
    <Background>
      <WhiteBackground />
      <Content>
        <Card>
          <TInput
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            numberOfLines={10}
            multiline
          />
        </Card>
        <SubmitButton>Enviar</SubmitButton>
      </Content>
    </Background>
  );
}

NewProblem.navigationOptions = {
  title: 'Informar problema',
};
