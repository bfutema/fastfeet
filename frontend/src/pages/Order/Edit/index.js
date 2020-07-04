import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import AsyncSelect from 'react-select/async';

import { updateOrderRequest } from '~/store/modules/order/actions';

import Card from '~/components/Card';

import api from '~/services/api';

import { Container, FormGroup, FormGroupGrid } from './styles';

export default function EditOrder() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [orderProductName, setOrderProductName] = useState('');

  const [recipientSelected, setRecipientSelected] = useState(0);
  const [recipientNameSelected, setRecipientNameSelected] = useState('');
  const [deliveryManSelected, setDeliveryManSelected] = useState(0);
  const [deliveryManNameSelected, setDeliveryManNameSelected] = useState('');

  useEffect(() => {
    async function loadRecipient() {
      const response = await api.get(`orders/${id}`);

      setRecipientSelected(response.data[0].recipient.id);
      setRecipientNameSelected(response.data[0].recipient.name);
      setDeliveryManSelected(response.data[0].deliveryman.id);
      setDeliveryManNameSelected(response.data[0].deliveryman.name);
      setOrderProductName(response.data[0].product);
    }

    loadRecipient();
  }, [id]);

  async function loadRecipientsOptions(inputValue, callback) {
    const response = await api.get('recipients');

    const data = response.data.map((recipient) => ({
      value: recipient.id,
      label: recipient.name,
    }));

    setTimeout(() => {
      callback(data);
    }, 1000);
  }

  async function loadDeliveryMansOptions(inputValue, callback) {
    const response = await api.get('deliverymans');

    const data = response.data.map((deliveryMan) => ({
      value: deliveryMan.id,
      label: deliveryMan.name,
    }));

    setTimeout(() => {
      callback(data);
    }, 1000);
  }

  function handleRecipientChange(e) {
    const { value, label } = e;

    setRecipientSelected(Number(value));
    setRecipientNameSelected(label);
  }

  function handleDeliveryManChange(e) {
    const { value, label } = e;

    setDeliveryManSelected(Number(value));
    setDeliveryManNameSelected(label);
  }

  function handleOrderProductNameChange(e) {
    const { value } = e.target;

    setOrderProductName(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(
      updateOrderRequest(
        id,
        recipientSelected,
        deliveryManSelected,
        orderProductName
      )
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card title="Edição de encomendas" backButtonLinkUrl="/orders">
        <Container>
          <FormGroupGrid>
            <div>
              <label htmlFor="recipient_id">Destinatário</label>
              <AsyncSelect
                id="recipient_id"
                name="recipient_id"
                cacheOptions
                loadOptions={loadRecipientsOptions}
                defaultOptions
                value={{
                  value: recipientSelected,
                  label: recipientNameSelected,
                }}
                onChange={handleRecipientChange}
              />
            </div>
            <div>
              <label htmlFor="deliveryman_id">Entregador</label>
              <AsyncSelect
                id="deliveryman_id"
                name="deliveryman_id"
                cacheOptions
                loadOptions={loadDeliveryMansOptions}
                defaultOptions
                value={{
                  value: deliveryManSelected,
                  label: deliveryManNameSelected,
                }}
                onChange={handleDeliveryManChange}
              />
            </div>
          </FormGroupGrid>
          <FormGroup>
            <div>
              <label htmlFor="name">Nome do produto</label>
              <input
                id="name"
                name="name"
                placeholder="Digite o nome do produto"
                onChange={handleOrderProductNameChange}
                value={orderProductName}
              />
            </div>
          </FormGroup>
        </Container>
      </Card>
    </form>
  );
}
