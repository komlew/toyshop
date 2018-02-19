// @flow
import React from 'react';
import type { Node } from 'react';

import { ProductItem } from '../components';
import { Overview } from '../styles';
import type { Product } from '../types';

type Props = {
  products: Array<Product>,
  productID: ?number,
};

export default ({ products, productID }: Props): Node => (
  <Overview>
    {products.map(product => (
      <ProductItem
        key={product.id}
        product={product}
        active={productID === product.id}
      />
    ))}
  </Overview>
);
