// @flow
import type { State } from '../types';

export const UNITS = {
  CURRENCY: '€',
};

export const API = {
  PRODUCTS:
    'https://private-5815fe-recommendationsknip.apiary-mock.com/products',
};

export const DEFAULT_STATE: State = {
  loading: true,
  products: [],
};
