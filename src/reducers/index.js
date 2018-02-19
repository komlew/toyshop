// @flow
import { DEFAULT_STATE, DATA_REQUEST } from '../constants';
import type { State, Action } from '../types';

export default (state: State = DEFAULT_STATE, action: Action) => {
  switch (action.type) {
    case DATA_REQUEST.PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case DATA_REQUEST.PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case DATA_REQUEST.PRODUCTS_ERROR:
      // TODO: Save external requests error logs on the server for monitoring
      return {
        ...state,
        loading: false,
      };
    case DATA_REQUEST.COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        commentsChecked: true,
      };
    case DATA_REQUEST.COMMENTS_ERROR:
      // TODO: Save internal browser error logs on the server for monitoring
      return {
        ...state,
        commentsChecked: true,
      };
    case DATA_REQUEST.COMMENT_SUBMIT:
      return {
        ...state,
        comments: state.comments.concat(action.payload),
      };
    default:
      return state;
  }
};
