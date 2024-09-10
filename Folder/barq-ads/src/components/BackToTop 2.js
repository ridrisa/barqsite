import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top d-flex align-items-center justify-content-center" aria-label="Back to top">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default BackToTop;