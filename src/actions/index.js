// @flow
import { DATA_REQUEST } from '../constants';
import type {
  ActionRequestProdcuts,
  ActionRequestComments,
  ActionSubmitComment,
  Comment,
} from '../types';

export const requestProdcuts = (): ActionRequestProdcuts => ({
  type: DATA_REQUEST.PRODUCTS,
});

export const requestComments = (): ActionRequestComments => ({
  type: DATA_REQUEST.COMMENTS,
});

export const submitComment = ({
  id,
  productID,
  text,
  time,
}: Comment): ActionSubmitComment => ({
  type: DATA_REQUEST.COMMENT_SUBMIT,
  payload: {
    id,
    productID,
    text,
    time,
  },
});
