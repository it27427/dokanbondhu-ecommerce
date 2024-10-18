import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <>
      <ul className='mobilemenu'>
        <li className='mobilemenu-item'>
          <Link to='/' className='mobilemenu-link'>
            Home
          </Link>
        </li>

        <li className='mobilemenu-item'>
          <Link to='/shop' className='mobilemenu-link'>
            Shop
          </Link>
        </li>

        <li className='mobilemenu-item'>
          <Link to='/about' className='mobilemenu-link'>
            About
          </Link>
        </li>

        <li className='mobilemenu-item'>
          <Link to='/blog' className='mobilemenu-link'>
            Blog
          </Link>
        </li>

        <li className='mobilemenu-item'>
          <Link to='/contact' className='mobilemenu-link'>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MobileMenu;
