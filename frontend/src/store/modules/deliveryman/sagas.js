import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  createDeliveryManSuccess,
  createDeliveryManFailure,
  updateDeliveryManSuccess,
  updateDeliveryManFailure,
  deleteDeliveryManSuccess,
  deleteDeliveryManFailure,
} from './actions';

export function* newDeliveryMan({ payload }) {
  try {
    const { name, email, avatarId: avatar_id } = payload;

    yield delay(1000);

    const response = yield call(api.post, 'deliverymans', {
      name,
      email,
      avatar_id,
    });

    const { data: deliveryMan } = response;

    yield put(createDeliveryManSuccess(deliveryMan));

    toast.success('Entregador cadastrado com sucesso!');

    history.push('/deliverymans');
  } catch (err) {
    toast.error('Ops..! Ocorreu um erro ao cadastrar o entregador.');
    yield put(createDeliveryManFailure());
  }
}

export function* updateDeliveryMan({ payload }) {
  try {
    const { id, name, email, avatarId: avatar_id } = payload;

    yield delay(1000);

    const response = yield call(api.put, `deliverymans/${id}`, {
      name,
      email,
      avatar_id,
    });

    const { data: deliveryMan } = response;

    yield put(updateDeliveryManSuccess(deliveryMan));

    toast.success('Entregador atualizado com sucesso!');

    history.push('/deliverymans');
  } catch (err) {
    toast.error('Ops..! Ocorreu um erro ao atualizar o entregador.');
    yield put(updateDeliveryManFailure());
  }
}

export function* deleteDeliveryMan({ payload }) {
  try {
    const { id } = payload;

    yield delay(1000);

    yield call(api.delete, `deliverymans/${id}`);

    yield put(deleteDeliveryManSuccess());

    toast.success('Entregador removido com sucesso!');

    history.push('/deliverymans');
  } catch (err) {
    toast.error('Ops..! Ocorreu um erro ao remover o entregador.');
    yield put(deleteDeliveryManFailure());
  }
}

export default all([
  takeLatest('@deliveryman/CREATE_DELIVERYMAN_REQUEST', newDeliveryMan),
  takeLatest('@deliveryman/UPDATE_DELIVERYMAN_REQUEST', updateDeliveryMan),
  takeLatest('@deliveryman/DELETE_DELIVERYMAN_REQUEST', deleteDeliveryMan),
]);
