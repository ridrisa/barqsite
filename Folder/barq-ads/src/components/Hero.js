import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import Particles from 'react-tsparticles';
import heroImage from '../images/newaccenty.jpg';

const Hero = () => {
  useEffect(() => {
    gsap.from('.hero-content', { opacity: 0, y: 50, duration: 1 });
  }, []);

  const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <section 
      className="hero" 
      id="top"
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)),
                     url(${heroImage}) no-repeat center/cover`
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="container">
        <div className="hero-content">
          <h1 className="mt-3">The Future of Advertising is Here</h1>
          <p className="lead">Reach your audience with AI-driven vehicle wrap solutions and real-time analytics</p>
          <Link to="contact" smooth={true} duration={500} className="btn btn-primary btn-lg animate__animated animate__fadeInUp animate__delay-0.5s">Start Your Campaign</Link>
        </div>
        <div className="container car-animation-container">
          <img src="/images/feature2-image.jpg" alt="Car Moving" className="car-animation" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Hero;