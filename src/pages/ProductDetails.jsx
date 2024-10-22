import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Parallax } from 'swiper/modules';

import BannerSection from '@/components/global/BannerSection';
import ProductDisplay from '@/components/shop/ProductDisplay';
import PopularPost from '@/components/shop/PopularPost';
import Tags from '@/components/shop/Tags';
import Review from '@/components/shop/Review';

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch('/src/db/products.json')
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, []);

  const result = product.filter((p) => p.id === id);

  return (
    <main className='main-section'>
      <BannerSection
        title='Our Shop Single'
        currentPage='Shop&nbsp; / &nbsp;Product Details'
      />

      <section className='shop-single padding-tb aside-bg'>
        <div className='container'>
          <div className='row g-4 justify-content-center'>
            {/* LEFT-SIDE */}
            <div className='col-lg-8 col-12'>
              <article>
                {/* PRODUCT-DETAILS */}
                <div className='product-details'>
                  <div className='row align-items-center'>
                    <div className='col-md-6 col-12'>
                      <div className='product-thumb'>
                        <div className='swiper-container pro-single-top'>
                          <Swiper
                            modules={[Autoplay, Navigation, Parallax]}
                            autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                            }}
                            // centeredSlides={true}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation={{
                              prevEl: '.pro-single-prev',
                              nextEl: '.pro-single-next',
                            }}
                            // loop={true}
                            parallax={true}
                            data-swiper-parallax='-23%'
                          >
                            {result.map((item) => (
                              <SwiperSlide key={item.id}>
                                <figure className='single-thumb'>
                                  <img src={item.img} alt={item.title} />
                                </figure>
                              </SwiperSlide>
                            ))}
                          </Swiper>

                          <div className='pro-single-prev'>
                            <i className='icofont-rounded-right'></i>
                          </div>

                          <div className='pro-single-next'>
                            <i className='icofont-rounded-left'></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-md-6 col-12'>
                      <div className='post-content'>
                        <div>
                          {result.map((item) => (
                            <ProductDisplay key={item.id} item={item} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* REVIEWS */}
                <div className='review'>
                  <Review />
                </div>
              </article>
            </div>

            {/* RIGHT-SIDE */}
            <div className='col-lg-4 col-12'>
              <aside>
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

export default ProductDetails;
