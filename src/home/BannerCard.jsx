
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

// Import required modules
import { EffectCards } from 'swiper/modules';


const BannerCard = () => {
  return (
    <div className='banner'>
      <Swiper
  effect={'cards'}
  grabCursor={true}
  modules={[EffectCards]}
  className="mySwiper"
>
  <SwiperSlide><img src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1737560637i/213870706.jpg' /></SwiperSlide>
  <SwiperSlide><img src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1719009996i/213573983.jpg' /></SwiperSlide>
  <SwiperSlide><img src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1718938514i/211003826.jpg' /></SwiperSlide>
  <SwiperSlide><img src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1734721658i/214175147.jpg' /></SwiperSlide>
  <SwiperSlide ><img src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1724122322i/216970872.jpg' /></SwiperSlide>

</Swiper>

    </div>
  )
}

export default BannerCard