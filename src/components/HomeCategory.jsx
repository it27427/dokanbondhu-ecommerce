import React from 'react';
import { Link } from 'react-router-dom';

const subTitle = 'Choose Any Products';
const title = 'Buy Everything with Us';
const btnText = 'Get Started Now';

const categoryList = [
  {
    id: 1,
    imgUrl: '@/assets/images/category/01.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-duotone icofont-brand-windows',
    title: 'DSLR Camera',
  },
  {
    id: 2,
    imgUrl: '@/assets/images/category/02.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-duotone icofont-brand-windows',
    title: 'Shoes',
  },
  {
    id: 3,
    imgUrl: '@/assets/images/category/03.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-duotone icofont-brand-windows',
    title: 'Photography',
  },
  {
    id: 4,
    imgUrl: '@/assets/images/category/04.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-duotone icofont-brand-windows',
    title: 'Formal Dress',
  },
  {
    id: 5,
    imgUrl: '@/assets/images/category/05.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-duotone icofont-brand-windows',
    title: 'Colorful Bags',
  },
  {
    id: 6,
    imgUrl: '@/assets/images/category/06.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-duotone icofont-brand-windows',
    title: 'Home Decor',
  },
];

const HomeCategory = () => {
  return (
    <section className='category-section style-4 padding-tb'>
      <div className='container'>
        <hgroup className='section-header text-center'>
          <h4 className='subtitle'>{subTitle}</h4>
          <h2 className='title'>{title}</h2>
        </hgroup>

        <div className='section-wrapper'>
          {categoryList.map((category) => (
            <div key={category.id} className='col'>
              <Link to='shop' className='category-item'>
                <div className='category-inner'>
                  <figure>
                    <img src={category.imgUrl} alt={category.imgAlt} />
                  </figure>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
