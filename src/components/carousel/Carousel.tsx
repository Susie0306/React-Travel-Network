import React from 'react';
import styles from './Carousel.module.css';
import { Image, Carousel as AntdCarousel } from 'antd';

import carouselImg1 from '../../assets/images/carousel_1.jpg';
import carouselImg2 from '../../assets/images/carousel_2.jpg';
import carouselImg3 from '../../assets/images/carousel_3.jpg';

export const Carousel: React.FC = () => {
  return (
    <AntdCarousel autoplay className={styles['slider']}>
      <Image src={carouselImg1} alt='carousel-1' />
      <Image src={carouselImg2} alt='carousel-2' />
      <Image src={carouselImg3} alt='carousel-3' />
    </AntdCarousel>
  );
}