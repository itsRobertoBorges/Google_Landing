import React, { useEffect } from 'react';

const TechSpecs = () => {

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
    <div id="techSpecsComponent"className="container mx-auto flex p-4">
      <div className="w-1/2 pr-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-500">Tech Specs</h1>
      </div>
      <div className="w-1/2 pl-8">
        <ul className="pl-0">
          <li className="mb-4 flex flex-col text-gray-500">
            <strong className="text-gray-500 mb-2">Camera</strong>
            <span>
              6.5-megapixel camera with 127-degree wide field of view and auto-framing, Face Match technology, Quick Gestures, mic + camera switch
            </span>
          </li>
          <li className="mb-4 flex flex-col text-gray-500">
            <strong className="text-gray-500 mb-2">Dimensions & Weight</strong>
            <span>
              Depth: 3.99 in (101.23 mm), Width: 9.85 in (250.1 mm), Height: 7.19 in (182.55 mm), Power cable: 1.5 m, Weight: 1.32 kg (2.91 lb)
            </span>
          </li>
          <li className="mb-4 flex flex-col text-gray-500">
            <strong className="text-gray-500 mb-2">Colors</strong>
            <span>
              Chalk, Charcoal
            </span>
          </li>
          <li className="mb-4 flex flex-col text-gray-500">
            <strong className="text-gray-500 mb-2">Display</strong>
            <span>
              10" HD touchscreen (1280x800)
            </span>
          </li>
          <li className="mb-4 flex flex-col text-gray-500">
            <strong className="text-gray-500 mb-2">Speakers and Mic</strong>
            <span>
              Google Assistant built-in, Stereo speaker system (2x 18 mm, 10 W tweeters, 1x 75 mm, 30 W woofer), Far-field microphones, Ultrasound sensing, Voice Match technology
            </span>
          </li>
          <li className="mb-4 flex flex-col text-gray-500">
            <strong className="text-gray-500 mb-2">Sensors</strong>
            <span>
              Ambient EQ light sensor
            </span>
          </li>
          <li className="mb-4 flex flex-col text-gray-500">
            <strong className="text-gray-500 mb-2">Connectivity</strong>
            <span>
              Wi-Fi 802.11b/g/n/ac (2.4 GHz/5 GHz), Bluetooth® 5.0 support, Chromecast built-in, 802.15.4 (at 2.4 GHz) thread support
            </span>
          </li>
          <li className="mb-4 flex flex-col text-gray-500">
            <strong className="text-gray-500 mb-2">Power</strong>
            <span>
              30 W power adaptor
            </span>
          </li>
          <li className="mb-4 flex flex-col text-gray-500">
            <strong className="text-gray-500 mb-2">Ports</strong>
            <span>
              DC power jack
            </span>
          </li>
          <li className="mb-4 flex flex-col text-gray-500">
            <strong className="text-gray-500 mb-2">Operating System</strong>
            <span>
              Android, iOS
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TechSpecs;
