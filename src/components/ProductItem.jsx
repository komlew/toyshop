// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { Node } from 'react';

import { UNITS } from '../constants';
import {
  ProductItem,
  ProductItemImage,
  ProductItemTitle,
  ProductItemPrice,
} from '../styles';
import type { Product } from '../types';

type Props = {
  product: Product,
  active: boolean,
};

export default ({ product, active }: Props): Node => (
  <ProductItem active={active}>
    <Link to={`/product/${product.id}/`}>
      <ProductItemImage src={product.images[0].thumb} alt={product.title} />
      <ProductItemTitle>{product.title}</ProductItemTitle>
      <ProductItemPrice data-unit={`Price: ${UNITS.CURRENCY}`}>
        {product.price}
      </ProductItemPrice>
    </Link>
  </ProductItem>
);
