// @flow
import type { Store, Reducer, StoreEnhancer, Middleware } from 'redux';

export type MiddlewareFn = Middleware<*, *>;
export type CreateStore<S, A, D> = (
  reducer: Reducer<S, A>,
  enhancer?: StoreEnhancer<S, A, D>,
) => Store<S, A, D>;

export type ProductImage = {|
  +thumb: string,
  +original: string,
|};

export type Product = {|
  +id: number,
  +title: string,
  +description: string,
  +specification: string,
  +price: number,
  +images: Array<ProductImage>,
|};

export type Comment = {|
  +id: string,
  +productID: number,
  +text: string,
  +time: number,
|};

export type State = {|
  +loading: boolean,
  +commentsChecked: boolean,
  +products: Array<Product>,
  +comments: Array<Comment>,
|};
