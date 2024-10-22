import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@/components/home/Rating';

const ProductCard = ({ gridList, products }) => {
  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        gridList ? 'grid' : 'list'
      }`}
    >
      {products.map((product) => (
        <div key={product.id} className='col-lg-4 col-md-6 col-12'>
          <div className='product-item'>
            {/* PRODUCT-THUMBNAIL */}
            <div className='product-thumb'>
              <figure className='pro-thumb'>
                <img src={product.img} alt={product.name} />
              </figure>

              <div className='product-action-link'>
                <Link to={`/shop/${product.id}`}>
                  <i className='icofont-eye'></i>
                </Link>

                <a href='#'>
                  <i className='icofont-heart'></i>
                </a>

                <Link to={`/cart`}>
                  <i className='icofont-cart-alt'></i>
                </Link>
              </div>
            </div>

            {/* PRODUCT-CONTENT */}
            <div className='product-content'>
              <h6 className='text-truncate'>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </h6>

              <div className='productRating text-warning'>
                <Rating />
              </div>

              <h6>$ {product.price}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
