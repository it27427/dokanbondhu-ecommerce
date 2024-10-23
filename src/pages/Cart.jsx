import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import BannerSection from '@/components/global/BannerSection';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // FETCH CART-ITEMS FROM LOCAL STORAGE
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  // CALCULATE PRICES
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  }

  // HANDLE QUANTITY INCRESE
  const handleIncrese = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    // UPDATE LOCAL-STORAGE WITH NEW CART ITEMS
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }

  // HANDLE QUANTITY DECRESE
  const handleDecrese = (item) => {
    if(item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
    
      // UPDATE LOCAL-STORAGE WITH NEW CART ITEMS
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }

  // HANDLE REMOVE ITEM
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    
    // UPDATE NEW CART
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  }

  const updateLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const cartSubTotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  const orderTotal = cartSubTotal;

  return (
    <main className='main-section'>
      <BannerSection title='Shopping Cart' currentPage='Cart' />

      <section className='shop-cart padding-tb'>
        <div className='container'>
          <div className="section-wrapper">
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className='cat-product'>Product</th>
                    <th className='cat-price'>Price</th>
                    <th className='cat-quantity'>Quantity</th>
                    <th className='cat-toprice'>Total</th>
                    <th className='cat-edit'>Edit</th>
                  </tr>
                </thead>
                
                <tbody>
                  {
                    cartItems.map((item, i) => (
                      <tr key={i}>
                        <td className='product-item cat-product'>
                          <figure className="p-thumb">
                            <Link to='/shop'>
                              <img src={item.img} alt={item.name} />
                            </Link>
                          </figure>
                          <div className="p-content">
                            <Link to='/shop'>{item.name}</Link>
                          </div>
                        </td>

                        <td className="cat-price">$ {item.price}</td>

                        <td className="cat-quantity">
                          <div className='cart-plus-minus'>
                            <button
                              onClick={() => handleDecrese(item)}
                              className='dec qtybutton d-flex align-items-center justify-content-center'
                            >
                              <i className='icofont-minus'></i>
                            </button>
                            <input
                              type='text'
                              name='qtybutton'
                              className='cart-plus-minus-box'
                              value={item.quantity}
                            />
                            <button
                              onClick={() => handleIncrese(item)}
                              className='inc qtybutton d-flex align-items-center justify-content-center'
                            >
                              <i className='icofont-plus'></i>
                            </button>
                          </div>
                        </td>

                        <td className='cat-toprice'>${parseInt(calculateTotalPrice(item))}</td>

                        <td className='cat-edit'>
                          <button onClick={() => handleRemoveItem(item)} type='button' className='bg-transparent text-warning'>
                            <i className="icofont-ui-delete"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>

            <div className="cart-bottom"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;