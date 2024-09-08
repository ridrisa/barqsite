import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => (
  <footer className="bg-dark text-light py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src="/images/logotransparentxs.png" alt="BARQ ADS logo" className="mb-3" height="40" />
          <p>Revolutionizing outdoor advertising with innovative mobile solutions.</p>
        </div>
        <div className="col-md-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><Link to="intro" smooth={true} duration={500}>About</Link></li>
            <li><Link to="feature" smooth={true} duration={500}>Features</Link></li>
            <li><Link to="testimonials" smooth={true} duration={500}>Clients</Link></li>
            <li><Link to="package" smooth={true} duration={500}>Pricing</Link></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Newsletter</h5>
          <p>Stay updated with our latest news and offers.</p>
          <form className="mt-3">
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Enter your email" required />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <hr className="mt-4 mb-3" />
      <div className="row">
        <div className="col-md-6">
          <p>&copy; 2024 BARQ ADS. All rights reserved.</p>
        </div>
        <div className="col-md-6 text-md-end">
          <Link to="#" className="me-3">Privacy Policy</Link>
          <Link to="#" className="me-3">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;