import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo/logo.svg';

const BrandLogo = () => {
  return (
    <>
      <Link to={'/'}>
        <figure className='logo'>
          <img src={logo} alt='brand-logo' />
        </figure>
      </Link>
    </>
  );
};

export default BrandLogo;
