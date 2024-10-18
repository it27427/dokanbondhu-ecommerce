import { Link } from 'react-router-dom';

const DesktopMenu = () => {
  return (
    <ul className='desktopmenu'>
      <li className='desktopmenu-item'>
        <Link to='/' className='desktopmenu-link'>
          Home
        </Link>
      </li>

      <li className='desktopmenu-item'>
        <Link to='/shop' className='desktopmenu-link'>
          Shop
        </Link>
      </li>

      <li className='desktopmenu-item'>
        <Link to='/about' className='desktopmenu-link'>
          About
        </Link>
      </li>

      <li className='desktopmenu-item'>
        <Link to='/blog' className='desktopmenu-link'>
          Blog
        </Link>
      </li>

      <li className='desktopmenu-item'>
        <Link to='/contact' className='desktopmenu-link'>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default DesktopMenu;
