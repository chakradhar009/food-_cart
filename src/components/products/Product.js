import React from 'react';

function Product({ product }) {
  return (
    <>
      <div className="product-box col-lg-4 col-md-6   ">
        <div className="card">
          <img
            src={product.url}
            className="card-img-top product-image"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">price: {product.price} </p>
            <a
              href={`/cart/${product.id}`}
              className="btn btn-primary btn-large"
            >
              Buy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
