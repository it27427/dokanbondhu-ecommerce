import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Parallax } from 'swiper/modules';

const FullScreenSlider = () => {
  return (
    <section>
      <div className='container'>
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
    </section>
  );
};

export default FullScreenSlider;
