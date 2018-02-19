// @flow
import { call, put } from 'redux-saga/effects';

import { DATA_REQUEST, API } from '../constants';
import fetch from '../helpers';
import type { Product, Comment, ActionSubmitComment } from '../types';

export function* dataRequest(): Generator<*, *, *> {
  try {
    const productsData: Array<Product> = yield call(fetch, API.PRODUCTS);
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

export function* commentsRequest(): Generator<*, *, *> {
  try {
    const flatComments: string = localStorage.getItem('comments') || '[]';
    const comments: ?Array<Comment> = JSON.parse(flatComments);
    if (!Array.isArray(comments)) {
      throw new Error('Not an array');
    }
    yield put({
      type: DATA_REQUEST.COMMENTS_SUCCESS,
      payload: comments,
    });
  } catch (error) {
    // TODO: Proper error handling on local storage access error
    yield put({
      type: DATA_REQUEST.COMMENTS_ERROR,
    });
  }
}

export function* commentsPost(action: ActionSubmitComment): Generator<*, *, *> {
  try {
    const flatComments: string = localStorage.getItem('comments') || '[]';
    const comments: ?Array<Comment> = JSON.parse(flatComments);
    if (!Array.isArray(comments)) {
      throw new Error('Not an array');
    }
    const newComments: Array<Comment> = comments.concat(action.payload);
    const mewFlatComments: string = JSON.stringify(newComments);
    localStorage.setItem('comments', mewFlatComments);
    yield put({
      type: DATA_REQUEST.COMMENT_SUBMIT_SUCCESS,
    });
  } catch (error) {
    // TODO: Proper error handling on local storage access error
    yield put({
      type: DATA_REQUEST.COMMENT_SUBMIT_ERROR,
    });
  }
}
