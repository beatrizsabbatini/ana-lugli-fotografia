import { takeLatest, put, call, all } from 'redux-saga/effects';

import { registerNewUser } from '../../services/register';

import { registerUserErrors, registerUserSuccess, Types } from '../ducks/register';

function* registerUser({payload}) {
  console.log('entrou no sagas', payload)
  try {
    yield call(registerNewUser, payload);

    yield put(registerUserSuccess(true));

  } catch (err) {

    yield put(registerUserErrors(err));
  }
}

export default function* root() {
  yield all([
    takeLatest(Types.REGISTER_USER_REQUEST, registerUser),
  ]);
}
