import { useState } from 'react';

const ProductDisplay = ({ item }) => {
  const { id, name, price, seller, ratingsCount, quantity } = item;
  const [prequantity, setPrequantity] = useState(quantity);
  const [coupon, setCoupon] = useState('');
  const [size, setSize] = useState('Select Size');
  const [color, setColor] = useState('Select Color');

  return (
    <div>
      <h5 className='title'>{name}</h5>
    </div>
  );
};

export default ProductDisplay;
