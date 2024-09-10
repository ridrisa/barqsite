import React, { useEffect, useRef } from 'react';
import useIntersectionObserver from './hooks/useIntersectionObserver';

const Stats = () => {
  const statsRef = useRef(null);
  const clientCountRef = useRef(null);
  const campaignCountRef = useRef(null);
  const vehicleCountRef = useRef(null);
  const impressionCountRef = useRef(null);

  const isIntersecting = useIntersectionObserver(statsRef, { threshold: 0.5 });

  // Add useEffect here, after declaring the refs and isIntersecting
  useEffect(() => {
    if (isIntersecting) {
      console.log('isIntersecting:', isIntersecting); // Log if element is intersecting
      console.log('ClientCount Element:', clientCountRef.current); // Log the client count element reference
      animateValue(clientCountRef.current, 0, 500, 2000); // Trigger animation for client count
      animateValue(campaignCountRef.current, 0, 1000, 2000); // Trigger animation for campaign count
      animateValue(vehicleCountRef.current, 0, 5000, 2000); // Trigger animation for vehicle count
      animateValue(impressionCountRef.current, 0, 10000000, 2000); // Trigger animation for impressions
    }
  }, [isIntersecting]); // Dependency array with isIntersecting

  // Ensure animateValue is defined and used properly
  const animateValue = (element, start, end, duration) => {
    if (!element) return; // Ensure the element exists
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(() => {
      current += increment;
      if (element) {
        element.innerHTML = current.toLocaleString();
      }
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  return (
    <section id="stats" className="py-5" ref={statsRef} style={{ backgroundColor: 'var(--primary-color)', color: 'var(--bg-color)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center mb-3" data-aos="fade-up">
            <h3 className="display-4" ref={clientCountRef}>0</h3>
            <p>Happy Clients</p>
          </div>
          <div className="col-md-3 text-center mb-3" data-aos="fade-up" data-aos-delay="200">
            <h3 className="display-4" ref={campaignCountRef}>0</h3>
            <p>Successful Campaigns</p>
          </div>
          <div className="col-md-3 text-center mb-3" data-aos="fade-up" data-aos-delay="400">
            <h3 className="display-4" ref={vehicleCountRef}>0</h3>
            <p>Vehicles Wrapped</p>
          </div>
          <div className="col-md-3 text-center mb-3" data-aos="fade-up" data-aos-delay="600">
            <h3 className="display-4" ref={impressionCountRef}>0</h3>
            <p>Ad Impressions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
