import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// BOOTSTRAP-CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

// ANIMATE AND ICON
import '@/assets/css/animate.css';
import '@/assets/css/icofont.min.css';
import '@/assets/css/magnific-popup.css';
import '@/assets/css/style.min.css';
import '@/assets/css/app.css';

// REACT-TOOLTIP
import 'react-tooltip/dist/react-tooltip.css';

// SWIPER CSS
import 'swiper/css';
import 'swiper/css/navigation';

// CUSTOM CSS
import '@/assets/scss/main.scss';

import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
