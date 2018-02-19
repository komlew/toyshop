// @flow
import type { State, Product } from '../types';

export const selectorIsLoading = (state: State): boolean => state.loading;

export const selectorProducts = (state: State): Array<Product> =>
  state.products;
