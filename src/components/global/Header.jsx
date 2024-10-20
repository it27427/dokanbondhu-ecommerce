import { useState } from 'react';

import Navbar from './Navbar';

const Header = () => {
  const [headerFixed, setHeaderFixed] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? 'header-fixed fadeInUp' : ''
      }`}
    >
      <Navbar />
    </header>
  );
};

export default Header;
