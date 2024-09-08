import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-5">
      <div className="container">
        <div className="section-title text-center">
          <h2>Cutting-Edge Advertising Solutions</h2>
          <p>Transform your fleet into mobile billboards with our solutions.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="feature-item text-center">
              <i className="fas fa-car fa-3x"></i>
              <h3>Vehicle Wraps</h3>
              <p>Turn your fleet into mobile billboards with eye-catching designs.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-item text-center">
              <i className="fas fa-cog fa-3x"></i>
              <h3>Programmatic Advertising</h3>
              <p>Streamline your campaigns with our automated solutions.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-item text-center">
              <i className="fas fa-chart-line fa-3x"></i>
              <h3>Real-Time Analytics</h3>
              <p>Monitor your campaign performance with real-time analytics and insights.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
