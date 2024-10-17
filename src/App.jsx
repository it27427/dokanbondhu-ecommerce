import { Routes, Route } from 'react-router-dom';

/* IMPORT-COMPONENTS */
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* IMPORT-PAGES */
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import BlogPage from '@/pages/Blog';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
