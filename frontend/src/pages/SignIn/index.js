import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Content } from './styles';

import logo from '~/assets/fastfeet-logo.png';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Content>
      <img src={logo} alt="FastFeet" />

      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Seu e-mail</label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="exemplo@email.com"
          />
        </div>
        <div>
          <label htmlFor="password">Sua senha</label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="*************"
          />
        </div>
        <button type="submit">Entrar no sistema</button>
      </Form>
    </Content>
  );
}
