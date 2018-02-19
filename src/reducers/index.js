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
      // TODO: Save error logs on the server for monitoring
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
