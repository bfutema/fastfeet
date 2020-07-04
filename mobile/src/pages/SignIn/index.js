import React from 'react';
import { Text } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Text>SignIn</Text>

      <Input
        style={{ marginTop: 30 }}
        placeholder="Informe seu ID de cadastro"
      />

      <Button>Entrar no sistema</Button>
    </Background>
  );
}
