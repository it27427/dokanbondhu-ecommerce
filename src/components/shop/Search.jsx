import { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ products, gridList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='widget widget-search'>
      <form className='search-wrapper mb-3'>
        <input
          type='search'
          placeholder='Search'
          name='search'
          id='search'
          defaultValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit'>
          <i className='icofont-search-2'></i>
        </button>
      </form>

      {/* SHOWING SEARCH-RESULT */}
      <div className='searchresult'>
        {searchTerm &&
          filteredProducts.map((product) => (
            <Link key={product.id} to={`/shop/${product.id}`}>
              <div className='d-flex align-items-center gap-3 p-2'>
                <figure className='pro-thumb'>
                  <img
                    src={product.img}
                    alt={product.name}
                    width={64}
                    className='flex-grow-0 flex-shrink-0'
                  />
                </figure>
                <div className='product-content'>
                  <p>{product.name}</p>
                  <h6>${product.price}</h6>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Search;
