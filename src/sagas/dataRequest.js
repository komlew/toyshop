// @flow
import { call, put } from 'redux-saga/effects';

import { DATA_REQUEST, API } from '../constants';
import fetch from '../helpers';

export default function*(): Generator<*, *, *> {
  try {
    const productsData = yield call(fetch, API.PRODUCTS);
    yield put({
      type: DATA_REQUEST.PRODUCTS_SUCCESS,
      payload: productsData,
    });
  } catch (error) {
    // TODO: Proper error handling on request error
    yield put({
      type: DATA_REQUEST.PRODUCTS_ERROR,
    });
  }
}
