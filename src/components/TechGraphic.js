import React from 'react'
import googleGraphic from '../assets/googleGraphic.jpg'
import '../App.css'
import { useEffect } from 'react';

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
      <div id="techGraphicComponent"className="tech-graphic-container">
        <img src={googleGraphic} alt="Google Graphic" className="tech-graphic-image" />
        <h1 className='image-title'>Upgrade to Intelligent Living</h1>
      </div>
    );
  };
  
  export default TechGraphic;