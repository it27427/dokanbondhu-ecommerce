import { Link } from 'react-router-dom';

const subTitle = 'Choose Any Products';
const title = 'Buy Everything with Us';
const btnText = 'Get Started Now';

const categoryList = [
  {
    id: 1,
    imgUrl: 'src/assets/images/category/01.jpg',
    imgAlt: 'category-camera',
    iconName: 'icofont-duotone icofont-camera-alt',
    title: 'DSLR Camera',
  },
  {
    id: 2,
    imgUrl: 'src/assets/images/category/02.jpg',
    imgAlt: 'category-shoes',
    iconName: 'icofont-duotone icofont-brand-gucci',
    title: 'Shoes',
  },
  {
    id: 3,
    imgUrl: 'src/assets/images/category/03.jpg',
    imgAlt: 'category-photography',
    iconName: 'icofont-duotone icofont-ui-camera',
    title: 'Photography',
  },
  {
    id: 4,
    imgUrl: 'src/assets/images/category/04.jpg',
    imgAlt: 'category-dress',
    iconName: 'icofont-duotone icofont-robot-face',
    title: 'Formal Dress',
  },
  {
    id: 5,
    imgUrl: 'src/assets/images/category/05.jpg',
    imgAlt: 'category-bags',
    iconName: 'icofont-duotone icofont-bag',
    title: 'Colorful Bags',
  },
  {
    id: 6,
    imgUrl: 'src/assets/images/category/06.jpg',
    imgAlt: 'category-home-decor',
    iconName: 'icofont-duotone icofont-ui-home',
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
          <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
            {categoryList.map((category) => (
              <div key={category.id} className='col'>
                <Link to='shop' className='category-item'>
                  <div className='category-inner'>
                    {/* CATEGORY-THUMBNAIL */}
                    <figure className='category-thumb'>
                      <img src={category.imgUrl} alt={category.imgAlt} />
                    </figure>

                    {/* CATEGORY-CONTENT */}
                    <div className='category-content'>
                      <div className='cate-icon d-flex align-items-center justify-content-center'>
                        <i className={category.iconName}></i>
                      </div>

                      <h6>{category.title}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className='d-flex justify-content-center mt-5'>
            <Link to={'/shop'} className='lab-btn'>
              {btnText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
