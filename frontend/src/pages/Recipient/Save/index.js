import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { createRecipientRequest } from '~/store/modules/recipient/actions';

import viaCepApi from '~/services/viaCepApi';

import Card from '~/components/Card';

import {
  Container,
  FormGroup,
  CustomFormGroupGrid,
  FormGroupGrid,
} from './styles';

export default function NewOrder() {
  const [address, setAddress] = useState({
    name: '',
    street: '',
    number: '',
    complement: '',
    city: '',
    state: '',
    zip: '',
  });

  const streetRef = useRef('');
  const cityRef = useRef('');
  const stateRef = useRef('');

  const dispatch = useDispatch();

  async function handleConsult(e) {
    let { value } = e.target;

    value = value.replace(/\D/g, '');

    const response = await viaCepApi.get(`${value}/json`);

    const { logradouro: street, localidade: city, uf: state } = response.data;

    streetRef.current.value = street;
    cityRef.current.value = city;
    stateRef.current.value = state;

    setAddress({ ...address, street, city, state });
  }

  function handleInputChange(e) {
    const { value, name } = e.target;

    setAddress({ ...address, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      createRecipientRequest(
        address.name,
        address.street,
        address.number,
        address.complement,
        address.city,
        address.state,
        address.zip
      )
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card title="Cadastro de destinatários" backButtonLinkUrl="/recipients">
        <Container>
          <FormGroup>
            <div>
              <label htmlFor="name">Nome</label>
              <input
                name="name"
                id="name"
                placeholder="Digite o nome do destinatário"
                onChange={handleInputChange}
                value={address.name}
              />
            </div>
          </FormGroup>
          <CustomFormGroupGrid>
            <div>
              <label htmlFor="street">Rua</label>
              <input
                ref={streetRef}
                name="street"
                id="street"
                placeholder="Rua..."
                onChange={handleInputChange}
                value={address.street}
              />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input
                name="number"
                id="number"
                placeholder="Número"
                onChange={handleInputChange}
                value={address.number}
              />
            </div>
            <div>
              <label htmlFor="complement">Complemento</label>
              <input
                name="complement"
                id="complement"
                placeholder="Ex.: Casa, próximo à..."
                onChange={handleInputChange}
                value={address.complement}
              />
            </div>
          </CustomFormGroupGrid>
          <FormGroupGrid>
            <div>
              <label htmlFor="city">Cidade</label>
              <input
                ref={cityRef}
                name="city"
                id="city"
                placeholder="Cidade"
                onChange={handleInputChange}
                value={address.city}
              />
            </div>
            <div>
              <label htmlFor="state">Estado</label>
              <input
                ref={stateRef}
                name="state"
                id="state"
                placeholder="Estado"
                onChange={handleInputChange}
                value={address.state}
              />
            </div>
            <div>
              <label htmlFor="zip">CEP</label>
              <input
                name="zip"
                id="zip"
                placeholder="01268-065"
                onBlur={handleConsult}
                onChange={handleInputChange}
                value={address.zip}
              />
            </div>
          </FormGroupGrid>
        </Container>
      </Card>
    </form>
  );
}
