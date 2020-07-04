import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  createRecipientSuccess,
  createRecipientFailure,
  updateRecipientSuccess,
  updateRecipientFailure,
  deleteRecipientSuccess,
  deleteRecipientFailure,
} from './actions';

export function* newRecipient({ payload }) {
  try {
    const { name, street, number, complement, state, city, zip } = payload;

    yield delay(1000);

    const response = yield call(api.post, 'recipients', {
      name,
      street,
      number,
      complement,
      state,
      city,
      zip,
    });

    const { data: recipient } = response;

    yield put(createRecipientSuccess(recipient));

    toast.success('Destinatário cadastrado com sucesso!');

    history.push('/recipients');
  } catch (err) {
    toast.error('Ops..! Ocorreu um erro ao cadastrar o destinatário.');
    yield put(createRecipientFailure());
  }
}

export function* updateRecipient({ payload }) {
  try {
    const { id, name, street, number, complement, state, city, zip } = payload;

    yield delay(1000);

    const response = yield call(api.put, `recipients/${id}`, {
      name,
      street,
      number,
      complement,
      state,
      city,
      zip,
    });

    const { data: recipient } = response;

    yield put(updateRecipientSuccess(recipient));

    toast.success('Destinatário atualizado com sucesso!');

    history.push('/recipients');
  } catch (err) {
    toast.error('Ops..! Ocorreu um erro ao atualizar o destinatário.');
    yield put(updateRecipientFailure());
  }
}

export function* deleteRecipient({ payload }) {
  try {
    const { id } = payload;

    yield delay(1000);

    yield call(api.delete, `recipients/${id}`);

    yield put(deleteRecipientSuccess());

    toast.success('Destinatário deletado com sucesso!');

    history.push('/recipients');
  } catch (err) {
    toast.error('Ops..! Ocorreu um erro ao deletar o destinatário.');
    yield put(deleteRecipientFailure());
  }
}

export default all([
  takeLatest('@recipient/CREATE_RECIPIENT_REQUEST', newRecipient),
  takeLatest('@recipient/UPDATE_RECIPIENT_REQUEST', updateRecipient),
  takeLatest('@recipient/DELETE_RECIPIENT_REQUEST', deleteRecipient),
]);
