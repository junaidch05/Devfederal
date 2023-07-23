import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import java from '../../public/java.png';
import python from '../../public/python.webp';
import csharp from '../../public/csharp.webp';
import php from '../../public/php.png';
import js from '../../public/js.png';


SwiperCore.use([Autoplay]);

export default function Swipper() {
  return (
<>
<Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      className='mySwiper'
    >
      <SwiperSlide>
        <div className="img">
          <Image src={java} alt="Java programming language" priority={true} className="icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img">
          <Image src={python} alt="Python programming language" priority={true} className="icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img">
          <Image src={js} alt="JavaScript programming language" priority={true} className="icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img">
          <Image src={php} alt="PHP programming language" priority={true} className="icons" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="img">
          <Image src={csharp} alt="C sharp programming language" priority={true} className="icons" />
        </div>
      </SwiperSlide>
    </Swiper>

</>
  )
}
