import { useState } from 'react';
import BannerSection from '@/components/global/BannerSection';

const showResults = 'Showing 01 - 12 of 139 Results';

const Shop = () => {
  const [gridList, setGridList] = useState(true);

  return (
    <main className='main-section'>
      {/* BANNER-SECTION */}
      <BannerSection title='Shop Page' currentPage='Shop' />

      {/* SHOP-PAGE-CONTENT */}
      <section className='shop-page padding-tb'>
        <div className='container'>
          <div className='row g-4 justify-content-center'>
            <div className='col-lg-8 col-12'>
              <article>
                <div className='shop-title d-flex flex-wrap justify-content-between'>
                  <p>{showResults}</p>

                  <div
                    className={`product-view-mode ${
                      gridList ? 'gridActive' : 'listActive'
                    }`}
                  >
                    <a
                      className='grid'
                      onClick={() => setGridList(!gridList)}
                      role='button'
                    >
                      <i className='icofont-ghost'></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <div className='col-lg-4 col-12'></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
