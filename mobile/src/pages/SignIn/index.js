import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/fastfeet-logo.png';

import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            keyboardType="numeric"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
        </Form>

        <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
      </Container>
    </Background>
  );
}
