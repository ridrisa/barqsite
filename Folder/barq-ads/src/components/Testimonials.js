import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="testimonials" className="py-5">
      <div className="container">
        <Slider {...settings}>
          <div>
            <p>"Great service! BARQ ADS really helped boost our brand visibility."</p>
            <h3>John Doe, CEO of XYZ Company</h3>
          </div>
          <div>
            <p>"Innovative solutions and excellent customer support. Highly recommended!"</p>
            <h3>Jane Smith, Marketing Director at ABC Corp</h3>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;