import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductData } from '../../util/ProductData';

const Cart = () => {
  let param = useParams();
  const id = param.id;
  console.log('params id => ', id);

  const product = ProductData.find((e) => e.id == id);
  console.log(product);

  let [quantity, setQuantity] = useState(1);

  let incrementQuantity = () => {
    if (quantity < 10) {
      setQuantity(Number(quantity) + 1);
    }
  };

  let decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  let handleChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div>
      <div class="cart-section">
        <div>
          <h3>Cart Summary</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div className="row">
              <div className="container col-lg-3">
                <h6>Item Name</h6>{' '}
              </div>
              <div className="container col-lg-3">
                <h6>Quantity</h6>{' '}
              </div>
              <div className="container col-lg-3">
                <h6>Price</h6>{' '}
              </div>
              <div className="container col-lg-3">
                <h6>Total</h6>{' '}
              </div>
            </div>
          </li>

          <li class="list-group-item">
            <div className="row">
              <div className="container col-lg-3">
                <span>{product.title}</span>
              </div>
              <div className="container col-lg-3">
                <div className="item-product-qunatity">
                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>

                  <input
                    type="text"
                    class="form-control"
                    value={quantity}
                    onChange={handleChange}
                  />

                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="container col-lg-3">
                <span>{product.price}</span>
              </div>
              <div className="container col-lg-3">
                <h6>{quantity * product.price}</h6>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div>
              <h5>Grand Total</h5>{' '}
              <span style={{ paddingLeft: '30px' }}>
                {quantity * product.price}{' '}
              </span>
            </div>
          </li>
          <li class="list-group-item">
            <a class="btn btn-primary btn-large" href="/checkout" role="button">
              Complete order
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
