import { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const title = 'Our Products';

const ProductData = [
  {
    id: 1,
    imgUrl: 'src/assets/images/categoryTab/01.jpg',
    cate: 'Shoes',
    title: 'Nike Premier X',
    author: 'assets/images/course/author/01.jpg',
    brand: 'Nike',
    price: '$199.00',
  },
  {
    id: 2,
    imgUrl: 'src/assets/images/categoryTab/02.jpg',
    cate: 'Bags',
    title: 'Asthetic Bags',
    author: 'assets/images/course/author/02.jpg',
    brand: 'D&J Bags',
    price: '$199.00',
  },
  {
    id: 3,
    imgUrl: 'src/assets/images/categoryTab/03.jpg',
    cate: 'Phones',
    title: 'iPhone 12',
    author: 'src/assets/images/categoryTab/brand/apple.png',
    brand: 'Apple',
    price: '$199.00',
  },
  {
    id: 4,
    imgUrl: 'src/assets/images/categoryTab/04.jpg',
    cate: 'Bags',
    title: 'Hiking Bag 15 Nh100',
    author: 'assets/images/course/author/04.jpg',
    brand: 'Gucci',
    price: '$199.00',
  },
  {
    id: 5,
    imgUrl: 'src/assets/images/categoryTab/05.jpg',
    cate: 'Shoes',
    title: 'Outdoor Sports Shoes',
    author: 'assets/images/course/author/05.jpg',
    brand: 'Nike',
    price: '$199.00',
  },
  {
    id: 6,
    imgUrl: 'src/assets/images/categoryTab/06.jpg',
    cate: 'Beauty',
    title: 'COSRX Snail Mucin',
    author: 'assets/images/course/author/06.jpg',
    brand: 'Zaara',
    price: '$199.00',
  },
  {
    id: 7,
    imgUrl: 'src/assets/images/categoryTab/07.jpg',
    cate: 'Bags',
    title: 'Look Less Chanel Bag ',
    author: 'assets/images/course/author/01.jpg',
    brand: 'Gucci',
    price: '$199.00',
  },
  {
    id: 8,
    imgUrl: 'src/assets/images/categoryTab/08.jpg',
    cate: 'Shoes',
    title: 'Casual Sneakers',
    author: 'assets/images/course/author/02.jpg',
    brand: 'Bata',
    price: '$199.00',
  },
];

const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);

  // CATEGORY BASED FILTERING
  const filterItem = (ctgItem) => {
    const updatedItems = ProductData.filter((currEl) => {
      return currEl.cate === ctgItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className='course-section style-3 padding-tb'>
      {/* SECTION-SHAPES */}
      <figure className='course-shape one'>
        <img src='/src/assets/images/shape-img/icon/01.png' alt='shape-img-1' />
      </figure>
      <figure className='course-shape two'>
        <img src='/src/assets/images/shape-img/icon/02.png' alt='shape-img-1' />
      </figure>

      {/* MAIN-CONTENT */}
      <div className='container'>
        {/* SECTION-HEADER */}
        <div className='section-header'>
          <h2 className='title'>{title}</h2>

          <div className='course-filter-group'>
            <ul className='lab-ul'>
              <li role='button' onClick={() => setItems(ProductData)}>
                All
              </li>
              <li role='button' onClick={() => filterItem('Bags')}>
                Bags
              </li>
              <li role='button' onClick={() => filterItem('Beauty')}>
                Beauty
              </li>
              <li role='button' onClick={() => filterItem('Phones')}>
                Phones
              </li>
              <li role='button' onClick={() => filterItem('Shoes')}>
                Shoes
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION-BODY */}
        <div className='section-wrapper'>
          <div className='row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 course-filter'>
            {items.map((product) => (
              <div key={product.id} className='col h-100'>
                <div className='course-item style-4 h-100'>
                  <div className='course-inner h-100'>
                    <figure className='course-thumb'>
                      <img src={product.imgUrl} alt={product.title} />
                      <div className='course-category'>
                        <div className='course-cate'>
                          <span>{product.cate}</span>
                        </div>
                        <div className='course-review'>
                          <Rating />
                        </div>
                      </div>
                    </figure>

                    <div className='course-content h-100 pb-3'>
                      <Link to={`/shop/${product.id}`}>
                        <h5>{product.title}</h5>
                      </Link>

                      <div className='course-footer'>
                        <div className='course-author'>
                          <Link to={`/`} className='ca-name'>
                            {product.brand}
                          </Link>
                        </div>

                        <p className='course-price'>{product.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowCase;
