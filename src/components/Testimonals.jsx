import React from 'react'
import '../styles/testimonals.css'
import { Swiper, SwiperSlide } from "swiper/react";

import avtar01 from '../assets/avatar01.png'
import avtar02 from '../assets/avatar02.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import { isCompositeComponent } from 'react-dom/test-utils';

const Testimonals = () => {
  return (
    <section className='home2'>
      <div className="container4 sliders">
        <h2 className="title">Testimonals</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide_item">
            <div className="slide_img1">
              <img src={avtar01} />
              </div>
              <h4>Jessica Fernandis</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio, in officiis autem incidunt obcaecati atque cupiditate dolorum quaerat, aliquam ut explicabo, veniam veritatis provident consequuntur nemo facere dolores vitae.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide><div className="slide_item">
            <div className="slide_img2">
              <img src={avtar02} />
            </div>
              <h4>Jessica Fernandis</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio, in officiis autem incidunt obcaecati atque cupiditate dolorum quaerat, aliquam ut explicabo, veniam veritatis provident consequuntur nemo facere dolores vitae.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide><div className="slide_item">
            <div className="slide_img3">
              <img src={avtar01} />
            </div>
              <h4>Jessica Fernandis</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio, in officiis autem incidunt obcaecati atque cupiditate dolorum quaerat, aliquam ut explicabo, veniam veritatis provident consequuntur nemo facere dolores vitae.</p>
          </div>
        </SwiperSlide>

      </Swiper>
      </div>
    </section>
  )
}

export default Testimonals