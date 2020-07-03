import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { createRecipientSuccess, createRecipientFailure } from './actions';

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

export default all([
  takeLatest('@recipient/CREATE_RECIPIENT_REQUEST', newRecipient),
]);
