import React from 'react';

const Search = ({ products, gridList }) => {
  return (
    <form>
      <input type='search' placeholder='Search' name='search' />
      <button type='submit'>
        <i className='icofont-search'></i>
      </button>
    </form>
  );
};

export default Search;
