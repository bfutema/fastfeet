import React from 'react';

import Card from '~/components/Card';

import {
  Container,
  FormGroup,
  CustomFormGroupGrid,
  FormGroupGrid,
} from './styles';

export default function EditRecipient() {
  return (
    <Card title="Edição de destinatários" backButtonLinkUrl="/recipients">
      <Container>
        <FormGroup>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              name="name"
              id="name"
              placeholder="Digite o nome do destinatário"
            />
          </div>
        </FormGroup>
        <CustomFormGroupGrid>
          <div>
            <label htmlFor="street">Rua</label>
            <input name="street" id="street" placeholder="Rua..." />
          </div>
          <div>
            <label htmlFor="number">Número</label>
            <input name="number" id="number" placeholder="Número" />
          </div>
          <div>
            <label htmlFor="complement">Complemento</label>
            <input
              name="complement"
              id="complement"
              placeholder="Ex.: Casa, próximo à..."
            />
          </div>
        </CustomFormGroupGrid>
        <FormGroupGrid>
          <div>
            <label htmlFor="city">Cidade</label>
            <input name="city" id="city" placeholder="Cidade" />
          </div>
          <div>
            <label htmlFor="state">Estado</label>
            <input name="state" id="state" placeholder="Estado" />
          </div>
          <div>
            <label htmlFor="zip">CEP</label>
            <input name="zip" id="zip" placeholder="01268-065" />
          </div>
        </FormGroupGrid>
      </Container>
    </Card>
  );
}
