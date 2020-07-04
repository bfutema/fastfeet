import { Alert } from 'react-native';
import { takeLatest, call, put, all, delay } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { deliveryManId } = payload;

    const response = yield call(api.post, 'access', { deliveryManId });

    const { token, deliveryman } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield delay(1000);

    yield put(signInSuccess(token, deliveryman));

    Alert.alert('Sucesso!', 'Bem vindo ao Fast Feet :)');

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação!',
      'Oops.. :( houve um erro ao efetuar o login, verifique seus dados.'
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
