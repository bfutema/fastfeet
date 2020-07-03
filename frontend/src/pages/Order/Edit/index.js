import React from 'react';

import Card from '~/components/Card';

import { Container, FormGroup, FormGroupGrid } from './styles';

export default function NewOrder() {
  return (
    <Card title="Edição de encomendas" backButtonLinkUrl="/orders">
      <Container>
        <FormGroupGrid>
          <div>
            <label htmlFor="recipient_id">Destinatário</label>
            <select name="recipient_id" id="recipient_id">
              <option value="0">Lud 1</option>
              <option value="1">Lud 2</option>
              <option value="2">Lud 3</option>
            </select>
          </div>
          <div>
            <label htmlFor="deliveryman_id">Entregador</label>
            <select name="deliveryman_id" id="deliveryman_id">
              <option value="0">Lud 1</option>
              <option value="1">Lud 2</option>
              <option value="2">Lud 3</option>
            </select>
          </div>
        </FormGroupGrid>
        <FormGroup>
          <div>
            <label htmlFor="name">Nome do produto</label>
            <input
              name="name"
              id="name"
              placeholder="Digite o nome do produto"
            />
          </div>
        </FormGroup>
      </Container>
    </Card>
  );
}
