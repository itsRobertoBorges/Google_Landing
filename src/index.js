import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import TechHero from './components/TechHero';
import TechGraphic from './components/TechGraphic';
import TechSpecs from './components/TechSpecs';
import TechGraphic2 from './components/TechGraphic2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <TechHero />
    <TechGraphic />
    <TechGraphic2 />
    <TechSpecs />
    <App />
  </React.StrictMode>
);
