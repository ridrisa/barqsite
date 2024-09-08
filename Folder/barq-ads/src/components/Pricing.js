import React from 'react';
import { Link } from 'react-scroll';

const Pricing = () => (
  <section id="package" className="py-5 bg-light">
    <div className="container">
      <div className="section-title">
        <h2>Flexible Pricing Plans</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="price-box p-4 animate__animated animate__fadeInLeft">
            <div className="price-heading text-center">
              <h3>Basic Package</h3>
            </div>
            <div className="price-group text-center my-4">
              <span className="h2">2000 SAR</span> / Vehicle
            </div>
            <ul className="list-unstyled">
              <li><i className="fas fa-check text-success me-2"></i>30 - 99 Vehicles</li>
              <li><i className="fas fa-check text-success me-2"></i>3 Months Minimum Duration</li>
              <li><i className="fas fa-check text-success me-2"></i>Monthly Reporting</li>
              <li><i className="fas fa-check text-success me-2"></i>Car Sticker - Logo Only</li>
            </ul>
            <div className="text-center mt-4">
              <Link to="contact" smooth={true} duration={500} className="btn btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="price-box p-4 animate__animated animate__fadeInRight">
            <div className="price-heading text-center">
              <h3>Premium Package</h3>
            </div>
            <div className="price-group text-center my-4">
              <span className="h2">1800 SAR</span> / Vehicle
            </div>
            <ul className="list-unstyled">
              <li><i className="fas fa-check text-success me-2"></i>100+ Vehicles</li>
              <li><i className="fas fa-check text-success me-2"></i>3 Months Minimum Duration</li>
              <li><i className="fas fa-check text-success me-2"></i>Real-time Tracking Dashboard</li>
              <li><i className="fas fa-check text-success me-2"></i>Large Vinyl Wrap - Full Vehicle</li>
            </ul>
            <div className="text-center mt-4">
              <Link to="contact" smooth={true} duration={500} className="btn btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;