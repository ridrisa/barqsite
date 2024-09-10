import React from 'react';
import { Link } from 'react-scroll';

const Map = () => (
  <section id="map" className="py-5" aria-label="Coverage map">
    <div className="creative-map-container">
      <iframe src="/map.html" allowFullScreen="" loading="lazy" title="BARQ ADS coverage map"></iframe>
      <div className="map-overlay-content animate__animated animate__fadeIn">
        <h3 className="map-title">Explore Our Reach</h3>
        <p className="map-description">See how our network spans across the city with precision targeting and unmatched coverage.</p>
        <Link to="contact" smooth={true} duration={500} className="btn btn-primary">Learn More</Link>
      </div>
    </div>
  </section>
);

export default Map;