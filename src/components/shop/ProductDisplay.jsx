import { useState } from 'react';
import { Link } from 'react-router-dom';
const desc =
  'REVAMPED DESIGN: The Voltaic EVO represents a fresh take on PUMA’s fast Viz Tech design language.';

const ProductDisplay = ({ item }) => {
  const { id, name, img, price, seller, ratingsCount, quantity } = item;
  const [prequantity, setQuantity] = useState(quantity);
  const [size, setSize] = useState('Select Size');
  const [color, setColor] = useState('Select Color');
  const [coupon, setCoupon] = useState('');

  const handleSizeChange = (e) => setSize(e.target.value);
  const handleColorChange = (e) => setColor(e.target.value);

  const handleDecrement = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity(prequantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      size: size,
      color: color,
      coupon: coupon,
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    // UPDATE LOCAL-STORAGE
    localStorage.setItem('cart', JSON.stringify(existingCart));

    // RESET FORM-FIELDS
    setQuantity(1);
    setSize('Select Size');
    setColor('Select Size');
    setCoupon('');
  };

  return (
    <div>
      <div>
        <h4 className='title'>{name}</h4>
        <p className='rating'>
          <i className='icofont-star'></i>
          <i className='icofont-star'></i>
          <i className='icofont-star'></i>
          <i className='icofont-star'></i>
          <i className='icofont-star'></i>
          <span> {ratingsCount} review</span>
        </p>
        <h4>${price}</h4>
        <h6 className='brandname'>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* SELECT CART-COMPONENT */}
      <form onSubmit={handleSubmit}>
        {/* SIZES */}
        <div className='select-product size'>
          <select
            name='size'
            id='size'
            value={size}
            onChange={handleSizeChange}
          >
            <option>Select Size</option>
            <option value='SM'>SM</option>
            <option value='MD'>MD</option>
            <option value='LG'>LG</option>
            <option value='XL'>XL</option>
            <option value='XXL'>XXL</option>
          </select>
          <i className='icofont-rounded-down'></i>
        </div>

        {/* COLORS */}
        <div className='select-product color'>
          <select
            name='color'
            id='color'
            value={color}
            onChange={handleColorChange}
          >
            <option>Select Color</option>
            <option value='Red'>Red</option>
            <option value='Green'>Green</option>
            <option value='Blue'>Blue</option>
            <option value='Black'>Black</option>
            <option value='White'>White</option>
            <option value='Ash'>Ash</option>
            <option value='Pink'>Pink</option>
          </select>
          <i className='icofont-rounded-down'></i>
        </div>

        {/* CART INCREMENT-DECREMENT */}
        <div className='cart-plus-minus'>
          <button
            type='button'
            onClick={handleDecrement}
            className='dec qtybutton d-flex align-items-center justify-content-center'
          >
            <i className='icofont-minus'></i>
          </button>
          <input
            type='text'
            name='qtybutton'
            id='qtybutton'
            placeholder='0'
            className='cart-plus-minus-box'
            value={prequantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          />
          <button
            type='button'
            onClick={handleIncrement}
            className='inc qtybutton d-flex align-items-center justify-content-center'
          >
            <i className='icofont-plus'></i>
          </button>
        </div>

        {/* DISCOUND-FIELD */}
        <div className='discount-code mb-2'>
          <input
            type='text'
            placeholder='Enter coupon code'
            onChange={(e) => setCoupon(e.target.value)}
          />
        </div>

        {/* CTA-BUTTONS */}
        <button type='submit' className='lab-btn'>
          <span>Add to Cart</span>
        </button>

        <Link to='/cart' className='lab-btn bg-primary'>
          <span>Checkout</span>
        </Link>
      </form>
    </div>
  );
};

export default ProductDisplay;
