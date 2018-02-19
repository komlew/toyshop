// @flow
import type { Product, Comment } from './index';

export type ActionRequestProdcuts = {|
  +type: 'DATA_REQUEST_PRODUCTS',
|};
export type ActionRequestProdcutsSuccess = {|
  +type: 'DATA_REQUEST_PRODUCTS_SUCCESS',
  +payload: Array<Product>,
|};
export type ActionRequestProdcutsError = {|
  +type: 'DATA_REQUEST_PRODUCTS_ERROR',
|};

export type ActionRequestComments = {|
  +type: 'DATA_REQUEST_COMMENTS',
|};
export type ActionRequestCommentsSuccess = {|
  +type: 'DATA_REQUEST_COMMENTS_SUCCESS',
  +payload: Array<Comment>,
|};
export type ActionRequestCommentsError = {|
  +type: 'DATA_REQUEST_COMMENTS_ERROR',
|};

export type ActionSubmitComment = {|
  +type: 'DATA_REQUEST_COMMENT_SUBMIT',
  +payload: Comment,
|};
export type ActionSubmitCommentSuccess = {|
  +type: 'DATA_REQUEST_COMMENT_SUBMIT_SUCCESS',
|};
export type ActionSubmitCommentError = {|
  +type: 'DATA_REQUEST_COMMENT_SUBMIT_ERROR',
|};

export type Action =
  | ActionRequestProdcuts
  | ActionRequestProdcutsSuccess
  | ActionRequestProdcutsError
  | ActionRequestComments
  | ActionRequestCommentsSuccess
  | ActionRequestCommentsError
  | ActionSubmitComment
  | ActionSubmitCommentSuccess
  | ActionSubmitCommentError;
