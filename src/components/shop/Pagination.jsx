const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  activePage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='lab-ul default-pagination'>
      <li className='page-item'>
        <button
          type='button'
          className='bg-transparent'
          onClick={() => {
            if (activePage <= pageNumbers.length) {
              paginate(activePage - 1);
            }
          }}
        >
          <i className='icofont-rounded-left'></i>
        </button>
      </li>

      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item ${number === activePage ? 'bg-warning' : ''}`}
        >
          <button
            onClick={() => paginate(number)}
            type='button'
            className='bg-transparent'
          >
            {number}
          </button>
        </li>
      ))}

      <li className='page-item'>
        <button
          type='button'
          className='bg-transparent'
          onClick={() => {
            if (activePage < pageNumbers.length) {
              paginate(activePage + 1);
            }
          }}
        >
          <i className='icofont-rounded-right'></i>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
