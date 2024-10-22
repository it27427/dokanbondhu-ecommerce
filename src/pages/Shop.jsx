import { useState } from 'react';
import Data from '@/db/products.json';

import BannerSection from '@/components/global/BannerSection';
import ProductCard from '@/components/shop/ProductCard';
import Pagination from '@/components/shop/Pagination';
import Search from '@/components/shop/Search';
import ShopCategory from '@/components/shop/ShopCategory';
import PopularPost from '@/components/shop/PopularPost';
import Tags from '@/components/shop/Tags';

const showResults = 'Showing 01 - 12 of 139 Results';

const Shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // FUNCTION TO CHANGE CURRENT-PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // FILTER PRODUCT BASED ON CATEGORY
  const [selectedCategory, setSelectedCategory] = useState('All');
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (currentCategory) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === currentCategory;
    });

    setSelectedCategory(currentCategory);
    setProducts(newItem);
  };

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
                    <a
                      className='list'
                      onClick={() => setGridList(!gridList)}
                      role='button'
                    >
                      <i className='icofont-listine-dots'></i>
                    </a>
                  </div>
                </div>

                {/* PRODUCT-CARDS */}
                <ProductCard gridList={gridList} products={currentProducts} />

                {/* PAGINATION */}
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>

            <div className='col-lg-4 col-12'>
              <aside>
                <Search products={products} gridList={gridList} />
                <ShopCategory
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory}
                />
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
