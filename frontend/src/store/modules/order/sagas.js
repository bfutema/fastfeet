import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  createOrderSuccess,
  createOrderFailure,
  updateOrderSuccess,
  updateOrderFailure,
  deleteOrderSuccess,
  deleteOrderFailure,
  cancelOrderSuccess,
  cancelOrderFailure,
} from './actions';

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

export function* updateOrder({ payload }) {
  try {
    const {
      id,
      recipientId: recipient_id,
      deliveryManId: deliveryman_id,
      product,
    } = payload;

    yield delay(1000);

    const response = yield call(api.put, `orders/${id}`, {
      recipient_id,
      deliveryman_id,
      product,
    });

    const { data: order } = response;

    yield put(updateOrderSuccess(order));

    toast.success('Encomenda atualizada com sucesso!');

    history.push('/orders');
  } catch (err) {
    toast.error('Ops..! Ocorreu um erro ao atualizar a encomenda.');
    yield put(updateOrderFailure());
  }
}

export function* deleteOrder({ payload }) {
  try {
    const { id } = payload;

    yield delay(1000);

    yield call(api.delete, `orders/${id}`);

    yield put(deleteOrderSuccess());

    toast.success('Encomenda deletada com sucesso!');

    history.push('/orders');
  } catch (err) {
    toast.error('Ops..! Ocorreu um erro ao deletar a encomenda.');
    yield put(deleteOrderFailure());
  }
}

export function* cancelOrder({ payload }) {
  try {
    const { problemId } = payload;

    yield delay(1000);

    yield call(api.delete, `problem/${problemId}/cancel-delivery`);

    yield put(cancelOrderSuccess());

    toast.success('Encomenda cancelada com sucesso!');

    history.push('/orders');
  } catch (err) {
    toast.error('Ops..! Ocorreu um erro ao cancelar a encomenda.');
    yield put(cancelOrderFailure());
  }
}

export default all([
  takeLatest('@order/CREATE_ORDER_REQUEST', newOrder),
  takeLatest('@order/UPDATE_ORDER_REQUEST', updateOrder),
  takeLatest('@order/DELETE_ORDER_REQUEST', deleteOrder),
  takeLatest('@order/CANCEL_ORDER_REQUEST', cancelOrder),
]);
