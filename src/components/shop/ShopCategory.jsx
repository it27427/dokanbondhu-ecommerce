import Data from '@/db/products.json';

const ShopCategory = ({
  filterItem,
  setItem,
  menuItems,
  setProducts,
  selectedCategory,
}) => {
  return (
    <>
      <div className='widget-header'>
        <h5 className='ms-2'>All Categories</h5>
      </div>

      <div>
        <button
          type='button'
          className={`m-2 ${selectedCategory === 'All' ? 'bg-warning' : ''}`}
          onClick={() => setProducts(Data)}
        >
          All
        </button>
        {menuItems.map((Val, id) => (
          <button
            key={id}
            type='button'
            className={`m-2 ${selectedCategory === Val ? 'bg-warning' : ''}`}
            onClick={() => filterItem(Val)}
          >
            {Val}
          </button>
        ))}
      </div>
    </>
  );
};

export default ShopCategory;
