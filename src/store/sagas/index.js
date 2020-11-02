import { all } from 'redux-saga/effects';

import registerSagas from './register.sagas';
import loginSagas from './login.sagas';

export default function* rootSaga() {
  yield all([
    registerSagas(),
    loginSagas()
  ]);
}
