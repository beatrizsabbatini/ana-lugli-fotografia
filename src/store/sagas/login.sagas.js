import { takeLatest, put, call, all } from 'redux-saga/effects';

import { login } from '../../services/login';

import { loginSuccess, loginErrors, Types } from '../ducks/login';

function* authenticate({payload}) {
  console.log('entrou no sagas', payload)
  try {
    const res = yield call(login, payload);
    console.log(res.data)

    yield put(loginSuccess(res.data.token));

  } catch (err) {
   
    yield put(loginErrors(err));
  }
}

export default function* root() {
  yield all([
    takeLatest(Types.LOGIN_REQUEST, authenticate),
  ]);
}
