import { Routes, Route } from 'react-router-dom';

/* IMPORT-PAGES */
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import BlogPage from '@/pages/Blog';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
    </>
  );
};

export default App;
