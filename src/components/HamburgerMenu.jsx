import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';
import BrandLogo from './BrandLogo';

const HamburgerMenu = () => {
  const offcanvasRef = useRef(null);

  useEffect(() => {
    if (offcanvasRef.current) {
      const offcanvasElement = new Offcanvas(offcanvasRef.current);

      const closeOffcanvas = () => offcanvasElement.hide();

      const links = document.querySelectorAll('.mobilemenu-link');
      links.forEach((link) => {
        link.addEventListener('click', closeOffcanvas);
      });

      // Cleanup event listeners on unmount
      return () => {
        links.forEach((link) => {
          link.removeEventListener('click', closeOffcanvas);
        });
      };
    }
  }, []);

  return (
    <>
      <button
        type='button'
        className='btn-hamburger'
        data-bs-toggle='offcanvas'
        data-bs-target='#mobileMenu'
        aria-controls='mobileMenu'
      >
        <i className='icofont-duotone icofont-menu'></i>
      </button>

      <div
        className='offcanvas offcanvas-start'
        tabIndex='-1'
        id='mobileMenu'
        ref={offcanvasRef}
      >
        <div className='offcanvas-header'>
          <BrandLogo />

          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>

        <div className='offcanvas-body'>
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
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
