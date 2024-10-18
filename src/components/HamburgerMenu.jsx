import BrandLogo from './BrandLogo';
import MobileMenu from './MobileMenu';

const HamburgerMenu = () => {
  return (
    <>
      <button
        type='button'
        className='btn-hamburger'
        data-bs-toggle='offcanvas'
        data-bs-target='#mobileMenu'
        aria-controls='mobileMenu'
      >
        <i className='icofont-menu'></i>
      </button>

      <div className='offcanvas offcanvas-start' tabIndex='-1' id='mobileMenu'>
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
          <MobileMenu />
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
