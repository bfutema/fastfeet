import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { updateDeliveryManRequest } from '~/store/modules/deliveryman/actions';

import Card from '~/components/Card';

import api from '~/services/api';

import AvatarInput from './AvatarInput';

import { Container, FormGroup } from './styles';

export default function EditDeliveryMan() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [deliveryManName, setDeliveryManName] = useState('');
  const [deliveryManEmail, setDeliveryManEmail] = useState('');
  const [avatarId, setAvatarId] = useState(0);
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    async function loadDeliveryMan() {
      const response = await api.get(`deliverymans/${id}`);

      setDeliveryManName(response.data[0].name);
      setDeliveryManEmail(response.data[0].email);
      setAvatarId(response.data[0].avatar.id);
      setAvatarUrl(response.data[0].avatar.url);
    }

    loadDeliveryMan();
  }, [id]);

  function handleSubmit({ name, email, avatar_id }) {
    dispatch(updateDeliveryManRequest(id, name, email, avatar_id));
  }

  return (
    <Form
      initialData={{
        id,
        name: deliveryManName,
        email: deliveryManEmail,
        avatarId,
      }}
      onSubmit={handleSubmit}
    >
      <Card title="Edição de entregadores" backButtonLinkUrl="/deliverymans">
        <Container>
          <AvatarInput
            name="avatar_id"
            avatarId={Number(id)}
            avatarUrl={avatarUrl}
          />
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
