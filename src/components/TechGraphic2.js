import React from 'react'
import googleGraphic2 from '../assets/googleGraphic2.png'
import '../App.css'
import { useEffect } from 'react';

const TechGraphic2 = () => {


    return (
      <div id="techGraphicComponent"className="tech-graphic-container">
        <img src={googleGraphic2} alt="Google Graphic" className="tech-graphic-image" />
        <h1 className='image-title'>Upgrade to Intelligent Living</h1>
      </div>
    );
  };
  
  export default TechGraphic2;