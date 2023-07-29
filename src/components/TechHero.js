import React, { useEffect } from 'react';
import '../App.css';

const TechHero = () => {
  useEffect(() => {
    const productTitles = document.querySelectorAll('.product-title');

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
    productTitles.forEach((title) => observer.observe(title));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="TechHeroComponent" className="hero">
      <div className="hero-content">
        <div className="product-info">
          <div className="product-description">
            <h1 className="product-title">Your Home's Smart Makeover.<br/>Google Nest Hub Max</h1>
            <button className="cta-button font-bold mt-5">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechHero;
