import { takeLatest, put, call, all } from 'redux-saga/effects';

import { login } from '../../services/login';

import { loginSuccess, loginErrors, Types } from '../ducks/login';

function* authenticate({payload}) {
  console.log('entrou no sagas', payload)
  try {
    yield call(login, payload);

    yield put(loginSuccess(true));

  } catch (err) {
   
    yield put(loginErrors(err));
  }
}

export default function* root() {
  yield all([
    takeLatest(Types.LOGIN_REQUEST, authenticate),
  ]);
}
