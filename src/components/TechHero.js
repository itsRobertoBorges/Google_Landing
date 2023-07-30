import React, { useEffect } from 'react';
import '../App.css';

const TechHero = () => {
  useEffect(() => {
    const productTitles = document.querySelectorAll('.product-title');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
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
            <h1 className="product-title text-center lg:text-left text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"> {/* Added mb-6 for margin-bottom */}
              Your Home's Smart Makeover.<br />Google Nest Hub Max
            </h1>
            <div className="flex justify-center lg:justify-start mt-5">
              <a href="https://store.google.com/config/google_nest_hub_max?hl=en-US">
                <button className="cta-button font-bold text-lg lg:text-xl px-6 py-3 mt-40">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechHero;

