import React, { Component } from 'react';
import { ProductData } from '../../util/ProductData';

class ProductItem extends Component {
  render() {
    console.log('product : ', ProductData);
    return (
      <div className="product-section" id="product">
        <div className="container-fluid">
          <div className="row">
            <div className="product-box col-lg-4 col-md-6   ">
              <div className="card">
                <img
                  src="../../images/coke.jpg"
                  className="card-img-top product-image"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Hamburger</h5>
                  <p className="card-text">price:200 </p>
                  <a href="/checkout" className="btn btn-primary btn-lg">
                    +
                  </a>
                  <a href="/checkout" className="btn btn-secondary btn-lg">
                    -
                  </a>
                </div>
              </div>
            </div>
            <div className="product-box col-lg-4 col-md-6  ">
              <div className="card">
                <img
                  src="assets/images/pepsi.jpg"
                  className="card-img-top product-image"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Pepsi</h5>
                  <p className="card-text">Price:50</p>
                  <a href="checkout.html" className="btn btn-primary btn-lg">
                    +
                  </a>
                  <a href="checkout.html" className="btn btn-secondary btn-lg">
                    -
                  </a>
                </div>
              </div>
            </div>
            <div className="product-box col-lg-4 col-md-6  ">
              <div className="card">
                <img
                  src="assets/images/coke.jpg"
                  className="card-img-top product-image"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Coke</h5>
                  <p className="card-text">price:50</p>
                  <a href="checkout.html" className="btn btn-primary btn-lg">
                    +
                  </a>
                  <a href="checkout.html" className="btn btn-secondary btn-lg ">
                    -
                  </a>
                </div>
              </div>
            </div>
            <div className="product-box col-lg-4 col-md-6  ">
              <div className="card">
                <img src="" className="card-img-top  product-image" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Fries</h5>
                  <p className="card-text">Price:100</p>
                  <a href="checkout.html" className="btn btn-primary btn-lg">
                    +
                  </a>
                  <a href="checkout.html" className="btn btn-secondary btn-lg">
                    -
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
