import React from 'react';

const ProductCard = ({ gridList, products }) => {
  console.log(products);
  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        gridList ? 'grid' : 'list'
      }`}
    >
      {products.map((product) => (
        <div key={product.id} className='col-lg-4 col-md-6 col-12'>
          <div className='product-item'>
            <figure className='product-thumb'>
              <img src={product.img} alt={product.name} />
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
