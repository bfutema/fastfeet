import React from 'react';

import Card from '~/components/Card';

import AvatarInput from './AvatarInput';

import { Container, FormGroup } from './styles';

export default function EditDeliveryMan() {
  return (
    <Card title="Edição de entregadores" backButtonLinkUrl="/deliverymans">
      <Container>
        <AvatarInput />
        <FormGroup>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              name="name"
              id="name"
              placeholder="Digite o nome do entregador"
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              placeholder="Digite o email do entregador"
            />
          </div>
        </FormGroup>
      </Container>
    </Card>
  );
}
