import React from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ isScrolled, toggleDarkMode }) => (
  <nav id="navbar-main" className={`navbar navbar-expand-lg navbar-light fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
    <div className="container">
      <Link className="navbar-brand" to="top" smooth={true} duration={500}>
        <img src="/images/logotransparentxs.png" alt="BARQ ADS logo" height="40" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="intro" smooth={true} duration={500}>About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="feature" smooth={true} duration={500}>Features</Link></li>
          <li className="nav-item"><Link className="nav-link" to="testimonials" smooth={true} duration={500}>Clients</Link></li>
          <li className="nav-item"><Link className="nav-link" to="package" smooth={true} duration={500}>Pricing</Link></li>
          <li className="nav-item"><Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link></li>
          <li className="nav-item"><button onClick={toggleDarkMode} className="btn btn-link nav-link">Toggle Dark Mode</button></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;