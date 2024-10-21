import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const sponsorList = [
  {
    id: 1,
    imgUrl: '/src/assets/images/sponsor/01.png',
  },
  {
    id: 2,
    imgUrl: '/src/assets/images/sponsor/02.png',
  },
  {
    id: 3,
    imgUrl: '/src/assets/images/sponsor/03.png',
  },
  {
    id: 4,
    imgUrl: '/src/assets/images/sponsor/04.png',
  },
  {
    id: 5,
    imgUrl: '/src/assets/images/sponsor/05.png',
  },
  {
    id: 6,
    imgUrl: '/src/assets/images/sponsor/06.png',
  },
];

const HomeSponsor = () => {
  return (
    <section className='sponsor-section section-bg'>
      <div className='container'>
        <div className='section-wrapper'>
          <div className='sponsor-slider'>
            <>
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                className='mySwiper'
              >
                {sponsorList.map((sponsor) => (
                  <SwiperSlide key={sponsor.id}>
                    <div className='sponsor-item'>
                      <figure className='sponsor-thumb'>
                        <img
                          src={sponsor.imgUrl}
                          alt={`Sponsor-${sponsor.id}`}
                        />
                      </figure>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSponsor;
