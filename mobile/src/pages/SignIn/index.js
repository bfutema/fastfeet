import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/fastfeet-logo.png';

import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            keyboardType="numeric"
            placeholder="Informe seu ID de cadastro"
          />
        </Form>

        <SubmitButton onPress={() => {}}>Entrar no sistema</SubmitButton>
        {/* <Input
          style={{ marginTop: 30 }}
          placeholder="Informe seu ID de cadastro"
        /> */}
      </Container>
    </Background>
  );
}
