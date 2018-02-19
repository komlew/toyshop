// @flow
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { UNITS } from '../constants';
import { DetailsGallery } from '../containers';
import {
  Details,
  DetailsClose,
  DetailsTitle,
  DetailsDescription,
  DetailsSpecification,
  DetailsPrice,
} from '../styles';
import type { Product } from '../types';

type Props = {
  product: ?Product,
};

class DetailsContainer extends PureComponent<Props> {
  render() {
    const { product } = this.props;
    return product ? (
      <Details>
        <DetailsClose>
          <Link to="/" />
        </DetailsClose>
        <DetailsGallery images={product.images} />
        <DetailsTitle>{product.title}</DetailsTitle>
        <DetailsPrice data-unit={`Price: ${UNITS.CURRENCY}`}>
          {product.price}
        </DetailsPrice>
        <DetailsDescription>{product.description}</DetailsDescription>
        <DetailsSpecification>{product.specification}</DetailsSpecification>
      </Details>
    ) : null;
  }
}

export default DetailsContainer;
