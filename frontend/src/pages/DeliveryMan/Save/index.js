import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';

import { createDeliveryManRequest } from '~/store/modules/deliveryman/actions';

import Card from '~/components/Card';

import AvatarInput from './AvatarInput';

import { Container, FormGroup } from './styles';

export default function NewDeliveryMan() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, avatar_id }) {
    dispatch(createDeliveryManRequest(name, email, avatar_id));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Card title="Cadastro de entregadores" backButtonLinkUrl="/deliverymans">
        <Container>
          <AvatarInput name="avatar_id" />
          <FormGroup>
            <div>
              <label htmlFor="name">Nome</label>
              <Input
                name="name"
                id="name"
                placeholder="Digite o nome do entregador"
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div>
              <label htmlFor="email">Email</label>
              <Input
                name="email"
                id="email"
                placeholder="Digite o email do entregador"
              />
            </div>
          </FormGroup>
        </Container>
      </Card>
    </Form>
  );
}
