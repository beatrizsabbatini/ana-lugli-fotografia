import { takeLatest, put, call, all } from 'redux-saga/effects';

import { getFiles } from '../../services/searchFilesService';

import {
  Types,
  getFilteredFilesSuccess,
  getFilteredFilesErrors
} from '../../store/ducks/fileSearch';

function* getFilteredFiles({payload}) {
  try {
    const response = yield call(getFiles, payload);

    yield put(getFilteredFilesSuccess(response.data));
  } catch (err) {
    yield put(getFilteredFilesErrors(err));
  }
}

export default function* root() {
  yield all([
    takeLatest(Types.GET_FILTERED_FILES_REQUEST, getFilteredFiles),
  ]);
}
