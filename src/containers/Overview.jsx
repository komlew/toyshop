// @flow
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { Products } from '../components';
import { Details } from '../containers';
import { Navbar } from '../styles';
import { requestProdcuts } from '../actions';
import { selectorIsLoading, selectorProducts } from '../selectors';
import type { Product, RouterMatch, State } from '../types';

type Props = {
  isLoading: boolean,
  products: Array<Product>,
  match: RouterMatch,
  requestProdcuts: () => void,
};

const mapStateToProps = (state: State) => ({
  isLoading: selectorIsLoading(state),
  products: selectorProducts(state),
});

const mapDispatchToProps = {
  requestProdcuts,
};

class MainArea extends PureComponent<Props> {
  componentDidMount() {
    const { products } = this.props;
    if (products.length === 0) {
      this.props.requestProdcuts();
    }
  }

  render() {
    const { isLoading, products } = this.props;
    // react-router url params come as strings, but the product ID is numeric
    const productID = parseInt(this.props.match.params.productID, 10);
    const singleProduct = products.find(product => product.id === productID);
    return (
      !isLoading &&
      products.length > 0 && (
        <Fragment>
          <Navbar>Category: Toys</Navbar>
          <Products products={products} productID={productID} />
          <Details product={singleProduct} />
        </Fragment>
      )
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainArea);
