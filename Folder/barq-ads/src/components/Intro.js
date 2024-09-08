import React from 'react';
import { Link } from 'react-scroll';

const Intro = () => (
  <section id="intro" className="py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 animate__animated animate__fadeInLeft">
          <img src="/images/Picture1.png" alt="BARQ ADS in action" className="img-fluid rounded" />
        </div>
        <div className="col-md-6 animate__animated animate__fadeInRight">
          <h2>Revolutionizing Outdoor Advertising</h2>
          <p>Maximize your brand's reach with our innovative vehicle wrap advertising solutions, powered by real-time data and cutting-edge technology.</p>
          <Link to="feature" smooth={true} duration={500} className="btn btn-primary">Learn More</Link>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;