import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import AsyncSelect from 'react-select/async';

import { updateOrderRequest } from '~/store/modules/order/actions';

import Card from '~/components/Card';

import api from '~/services/api';

import { Container, FormGroup, FormGroupGrid } from './styles';

export default function EditOrder() {
  const { id } = useParams();

  const order = useSelector((state) =>
    state.order.orders.find((item) => item.id === Number(id))
  );

  const [recipientSelected, setRecipientSelected] = useState(
    order.recipient.id
  );

  const [deliveryManSelected, setDeliveryManSelected] = useState(
    order.deliveryman.id
  );

  const [orderProductName, setOrderProductName] = useState(order.product);

  const dispatch = useDispatch();

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

  function handleRecipientChange(newValue) {
    const { value } = newValue;

    setRecipientSelected(Number(value));
  }

  function handleDeliveryManChange(newValue) {
    const { value } = newValue;

    setDeliveryManSelected(Number(value));
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
                defaultValue={order.recipient.id}
                defaultInputValue={order.recipient.name}
                cacheOptions
                loadOptions={loadRecipientsOptions}
                defaultOptions
                onChange={handleRecipientChange}
              />
            </div>
            <div>
              <label htmlFor="deliveryman_id">Entregador</label>
              <AsyncSelect
                id="deliveryman_id"
                name="deliveryman_id"
                defaultValue={order.deliveryman.id}
                defaultInputValue={order.deliveryman.name}
                cacheOptions
                loadOptions={loadDeliveryMansOptions}
                defaultOptions
                onChange={handleDeliveryManChange}
              />
            </div>
          </FormGroupGrid>
          <FormGroup>
            <div>
              <label htmlFor="name">Nome do produto</label>
              <input
                name="name"
                id="name"
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
