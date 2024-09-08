import React from 'react';

const Footer = () => {
  return (
    <footer className="py-3">
      <div className="container">
        <div className="d-flex justify-content-between">
          <p>&copy; 2024 BARQ ADS. All Rights Reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#privacy" className="text-white">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="#terms" className="text-white">Terms of Service</a></li>
            <li className="list-inline-item"><a href="#contact" className="text-white">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
