import { all } from 'redux-saga/effects';

import registerSagas from './register.sagas';
import loginSagas from './login.sagas';
import bannerSagas from './banner.sagas';
import fileSearchSagas from './fileSearch.sagas';

export default function* rootSaga() {
  yield all([
    registerSagas(),
    loginSagas(),
    bannerSagas(),
    fileSearchSagas()
  ]);
}
