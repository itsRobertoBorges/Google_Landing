import React, { useEffect } from 'react';
import googleGraphic from '../assets/googleGraphic.jpg';
import '../App.css';

const TechGraphic = () => {
  useEffect(() => {
    const imageTitle = document.querySelector('.image-title');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold value as needed
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-title');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(imageTitle);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="techGraphicComponent" className="tech-graphic-container relative">
      <img src={googleGraphic} alt="Google Graphic" className="tech-graphic-image" />
      <h1 className="image-title absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-center p-4 md:p-6 text-lg md:text-xl hidden md:block">
        Upgrade to Intelligent Living
      </h1>
      <h1 className="image-title text-center md:hidden">
        Upgrade to Intelligent Living
      </h1>
    </div>
  );
};

export default TechGraphic;

