import React from 'react';

import { Content } from './styles';

import logo from '~/assets/fastfeet-logo.png';

export default function SignIn() {
  return (
    <Content>
      <img src={logo} alt="FastFeet" />

      <form>
        <div>
          <label htmlFor="email">Seu e-mail</label>
          <input id="email" type="email" placeholder="exemplo@email.com" />
        </div>
        <div>
          <label htmlFor="password">Sua senha</label>
          <input id="password" type="password" placeholder="*************" />
        </div>
        <button type="submit">Entrar no sistema</button>
      </form>
    </Content>
  );
}
