import React from 'react';

const Feature = () => (
  <section id="feature" className="py-5 bg-light">
    <div className="container">
      <div className="section-title">
        <h2>Cutting-Edge Advertising Solutions</h2>
        <p>Transform our fleet into your mobile billboards with eye-catching solutions</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="feature-item">
            <img src="/images/neoleap.png" alt="Data Analytics" className="img-fluid mb-3" />
            <i className="fas fa-car"></i>
            <h3>Vehicle Wraps</h3>
            <p>Transform our fleet into your mobile billboards with eye-catching full or partial wraps.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-item">
            <img src="/images/spiderman.jpeg" alt="Data Analytics" className="img-fluid mb-3" />
            <i className="fas fa-tablet-alt"></i>
            <h3>Digital Display</h3>
            <p>Deploy dynamic digital ads with our state-of-the-art smart screens for real-time content updates.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-item">
            <img src="/images/Designer (28).jpeg" alt="Data Analytics" className="img-fluid mb-3" />
            <i className="fas fa-chart-line"></i>
            <h3>Analytics Dashboard</h3>
            <p>Track your campaign performance with our comprehensive analytics and reporting tools.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Feature;