import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

/* IMPORT-COMPONENTS */
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* IMPORT-PAGES */
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import BlogPage from '@/pages/Blog';
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

        {/* NOT-FOUND PAGE */}
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>

      <Footer />

      <ScrollToTop smooth width={24} height={24} />
    </>
  );
};

export default App;
