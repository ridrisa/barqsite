import React from 'react';

const Technology = () => (
  <section id="technology" className="py-5">
    <div className="container">
      <div className="section-title">
        <h2>Advanced Technology Platform</h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="feature-item">
            <img src="/images/car1.avif" alt="Geotargeting" className="img-fluid mb-3" />
            <h4><i className="fas fa-map-marker-alt me-2"></i>Geotargeting Precision</h4>
            <p>Deliver hyper-targeted campaigns based on precise geofencing and real-time data.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-item">
            <img src="/images/car2.avif" alt="Programmatic Advertising" className="img-fluid mb-3" />
            <h4><i className="fas fa-cogs me-2"></i>Programmatic Advertising</h4>
            <p>Streamline your ad buying process with our cutting-edge programmatic solutions.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-item">
            <img src="/images/car3.avif" alt="Data Analytics" className="img-fluid mb-3" />
            <h4><i className="fas fa-chart-bar me-2"></i>Comprehensive Data Analytics</h4>
            <p>Gain valuable insights with our robust data analytics dashboard.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Technology;