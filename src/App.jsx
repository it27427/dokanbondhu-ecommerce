import { Routes, Route } from 'react-router-dom';

/* IMPORT-COMPONENTS */
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* IMPORT-PAGES */
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import BlogPage from '@/pages/Blog';
import NotFoundPage from '@/pages/Error';

const App = () => {
  return (
    <>
      {/* IF PAGE NOT-FOUND HIDE HEADER */}
      {window.location.pathname === '/*' ? <Header /> : null}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />

        {/* NOT-FOUND PAGE */}
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>

      {/* IF PAGE NOT-FOUND HIDE FOOTER */}
      {window.location.pathname === '/*' ? <Footer /> : null}
    </>
  );
};

export default App;
