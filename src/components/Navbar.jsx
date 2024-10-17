import { Link } from 'react-router-dom';

import BrandLogo from './BrandLogo';
import SignUpMenu from './SignUpMenu';

const Navbar = () => {
  return (
    <nav className='headernav'>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between'>
          <BrandLogo />
          <SignUpMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
