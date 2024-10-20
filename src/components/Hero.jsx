import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Parallax } from 'swiper/modules';

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
  const [filteredProducts, setFilteredProducts] = useState('');

  return (
    <section className='banner-section style-4'>
      <div className='container d-none'>
        <Swiper
          modules={[Autoplay, Navigation, Parallax]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          loop={true}
          parallax={true}
          data-swiper-parallax='-23%'
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>

      <div className='container'>
        <div className='banner-content'>{title}</div>

        <form>
          <input
            type='search'
            name='search'
            id='search'
            placeholder='Search your product'
            value={searchInput}
          />
        </form>
      </div>
    </section>
  );
};

export default Hero;
