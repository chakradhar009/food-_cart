import React, { Component } from 'react';
import { ProductData } from '../../util/ProductData';
import Product from './Product';

class ProductItem extends Component {
  render() {
    console.log('product : ', ProductData);
    return (
      <div className="product-section" id="product">
        <div className="container-fluid">
          <div className="row">
            {ProductData &&
              ProductData.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
