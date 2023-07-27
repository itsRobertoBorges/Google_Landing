import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import TechHero from './components/TechHero';
import TechGraphic from './components/TechGraphic';
import TechSpecs from './components/TechSpecs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <TechHero />
    <TechGraphic />
    <TechSpecs />
    <App />
  </React.StrictMode>
);
