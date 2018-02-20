// @flow
import { takeLatest, call } from 'redux-saga/effects';

import { DATA_REQUEST } from '../constants';

import dataRequest from './dataRequest';
import { commentsRequest, commentsPost } from './comments';

function* watchAsyncActions(): Generator<*, *, *> {
  yield takeLatest(DATA_REQUEST.PRODUCTS, dataRequest);
  yield takeLatest(DATA_REQUEST.COMMENTS, commentsRequest);
  yield takeLatest(DATA_REQUEST.COMMENT_SUBMIT, commentsPost);
}

export default function*(): Generator<*, *, *> {
  yield call(watchAsyncActions);
}
