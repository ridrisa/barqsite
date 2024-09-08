import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-5 bg-light">
      <div className="container">
        <div className="section-title text-center">
          <h2>Affordable Pricing Plans</h2>
          <p>Choose a plan that suits your needs and budget.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title">Basic</h5>
                <p className="card-text">$199/month</p>
                <ul className="list-unstyled">
                  <li>1 Vehicle Wrap</li>
                  <li>Basic Analytics</li>
                  <li>Email Support</li>
                </ul>
                <a href="#contact" className="btn btn-primary">Get Started</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title">Standard</h5>
                <p className="card-text">$399/month</p>
                <ul className="list-unstyled">
                  <li>Up to 5 Vehicle Wraps</li>
                  <li>Advanced Analytics</li>
                  <li>Phone Support</li>
                </ul>
                <a href="#contact" className="btn btn-primary">Get Started</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title">Premium</h5>
                <p className="card-text">$799/month</p>
                <ul className="list-unstyled">
                  <li>Unlimited Vehicle Wraps</li>
                  <li>Real-Time Analytics</li>
                  <li>24/7 Priority Support</li>
                </ul>
                <a href="#contact" className="btn btn-primary">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
