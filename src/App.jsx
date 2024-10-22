import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

/* IMPORT-COMPONENTS */
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';

/* IMPORT-PAGES */
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import BlogPage from '@/pages/Blog';
import ContactPage from '@/pages/Contact';
import ShopPage from '@/pages/Shop';
import ProductDetails from '@/pages/ProductDetails';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Cart from '@/pages/Cart';
/* ERROR-PAGE */
import NotFoundPage from '@/pages/Error';

const App = () => {
  const location = useLocation();
  const isNotFoundPage = location.pathname === '/*';

  return (
    <>
      {/* IF PAGE NOT-FOUND HIDE HEADER */}
      {!isNotFoundPage && <Header />}

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/shop/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />

        {/* NOT-FOUND PAGE */}
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>

      <Footer />

      <ScrollToTop smooth width={24} height={24} />
    </>
  );
};

export default App;
