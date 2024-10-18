import BrandLogo from './BrandLogo';
import DesktopMenu from './DesktopMenu';
import HamburgerMenu from './HamburgerMenu';
import SignUpMenu from './SignUpMenu';

const Navbar = () => {
  return (
    <nav className='headernav'>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between'>
          {/* MOBILE-MENU */}
          <HamburgerMenu />

          {/* BRAND-LOGO */}
          <BrandLogo />

          {/* DESKTOP-MENU */}
          <div className='d-none d-lg-block'>
            <DesktopMenu />
          </div>

          {/* DESKTOP-AUTHENTICATION-MENU */}
          <div className='d-none d-md-block'>
            <SignUpMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
