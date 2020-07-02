import React from 'react';
import Ink from 'react-ink';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import { Content } from './styles';

import logo from '~/assets/fastfeet-logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Content>
      <img src={logo} alt="FastFeet" />

      <Form schema={schema} onSubmit={handleSubmit}>
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
        <button type="submit">
          {loading ? 'Carregando . . .' : 'Entrar no sistema'}
          <Ink />
        </button>
      </Form>
    </Content>
  );
}
