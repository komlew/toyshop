// @flow
import type { State, Product, Comment } from '../types';

export const selectorIsLoading = (state: State): boolean => state.loading;

export const selectorProducts = (state: State): Array<Product> =>
  state.products;

export const selectorComments = (state: State): Array<Comment> =>
  state.comments;

export const selectorCommentsChecked = (state: State): boolean =>
  state.commentsChecked;
