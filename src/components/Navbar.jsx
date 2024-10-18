import { Link } from 'react-router-dom';

import BrandLogo from './BrandLogo';
import SignUpMenu from './SignUpMenu';
import DesktopMenu from './DesktopMenu';

const Navbar = () => {
  return (
    <nav className='headernav'>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between'>
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
