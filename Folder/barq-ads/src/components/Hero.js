import React from 'react';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}>
      <div className="hero-content">
        <h1>The Future of Advertising is Here</h1>
        <p>Reach your audience with AI-driven vehicle wrap solutions and real-time analytics.</p>
        <a href="#contact" className="btn btn-primary">Start Your Campaign</a>
      </div>
    </section>
  );
};

export default Hero;
