import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { createOrderSuccess, createOrderFailure } from './actions';

export function* newOrder({ payload }) {
  try {
    const {
      recipientId: recipient_id,
      deliveryManId: deliveryman_id,
      name: product,
    } = payload;

    yield delay(1000);

    const response = yield call(api.post, 'orders', {
      recipient_id,
      deliveryman_id,
      product,
    });

    const { data: order } = response;

    yield put(createOrderSuccess(order));

    toast.success('Encomenda cadastrada com sucesso!');

    history.push('/orders');
  } catch (err) {
    toast.error('Ops..! Ocorreu um erro ao cadastrar a encomenda.');
    yield put(createOrderFailure());
  }
}

export default all([takeLatest('@orders/CREATE_ORDER_REQUEST', newOrder)]);
