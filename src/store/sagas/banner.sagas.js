import { takeLatest, put, call, all } from 'redux-saga/effects';

import { getBannerItems } from '../../services/bannerService';

import {
  Types,
  getBannerItemsSuccess,
  getBannerItemsErrors
} from '../../store/ducks/bannerItems';

function* requestBannerItems() {
  try {
    const response = yield call(getBannerItems);

    yield put(getBannerItemsSuccess(response.data));
  } catch (err) {
    yield put(getBannerItemsErrors(err));
  }
}

export default function* root() {
  yield all([
    takeLatest(Types.GET_BANNER_ITEMS_REQUEST, requestBannerItems),
  ]);
}
