// @flow
import { takeLatest, call } from 'redux-saga/effects';

import { DATA_REQUEST } from '../constants';

import dataRequest from './dataRequest';

function* watchAsyncActions(): Generator<*, *, *> {
  yield takeLatest(DATA_REQUEST.PRODUCTS, dataRequest);
}

export default function*(): Generator<*, *, *> {
  yield call(watchAsyncActions);
}
