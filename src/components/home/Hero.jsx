import { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '@/db/products.json';

import SelectedCategory from './SelectedCategory';

const title = (
  <h2>
    Search Your One From <span>Thousand</span> of Products
  </h2>
);
const description = 'We have the largest collection of products.';

const bannerList = [
  {
    id: '1',
    iconName: 'icofont-duotone icofont-user-alt-4',
    text: '1.5 Million Customers',
  },
  {
    id: '2',
    iconName: 'icofont-duotone icofont-notification',
    text: 'More then 2000 Marchent',
  },
  {
    id: '3',
    iconName: 'icofont-duotone icofont-globe',
    text: 'Buy Anything Online',
  },
];

const Hero = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // FILTERING PRODUCT BASED ON SEARCH
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <section className='banner-section style-4'>
      <div className='container'>
        <div className='banner-content'>
          {title}

          <form>
            <SelectedCategory select='all' />
            <input
              type='search'
              name='search'
              id='search'
              placeholder='Search your product'
              value={searchInput}
              onChange={handleSearch}
            />
            <button type='submit'>
              <i className='icofont-duotone icofont-search'></i>
            </button>
          </form>

          <p>{description}</p>

          <ul className='lab-ul'>
            {searchInput &&
              filteredProducts.map((product) => (
                <li key={product.id}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
