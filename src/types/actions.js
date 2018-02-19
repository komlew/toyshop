// @flow
import type { Product } from './index';

export type ActionRequestProdcuts = {
  type: 'DATA_REQUEST_PRODUCTS',
};

export type ActionRequestProdcutsSuccess = {
  type: 'DATA_REQUEST_PRODUCTS_SUCCESS',
  payload: Array<Product>,
};

export type ActionRequestProdcutsError = {
  type: 'DATA_REQUEST_PRODUCTS_ERROR',
};

export type Action =
  | ActionRequestProdcuts
  | ActionRequestProdcutsSuccess
  | ActionRequestProdcutsError;
