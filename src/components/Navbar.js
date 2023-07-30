import React, { useState, useEffect } from 'react';
import googleLogo from '../assets/googleLogo.png';


const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Add this state variable

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const offset = navbar.offsetTop;
      if (window.pageYOffset > offset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // A function to handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      id="navbar"
      className={`border-gray-200 bg-gray-50 dark:bg-white dark:border-gray-700 ${
        isSticky ? 'sticky-navbar' : ''
      }`}
    >
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="https://google.ca" class="flex items-center">
          <img src={googleLogo} class="h-20 mr-3" alt="Google Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
          onClick={handleMobileMenuToggle} // Add onClick to toggle mobile menu
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          class={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="#TechHeroComponent"
                class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 md:dark:bg-transparent hover:text-white md:hover:text-blue-700 dark:hover:text-white md:dark:hover:text-blue-500 hover:animate-bounce"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#techSpecsComponent"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:text-red-500 dark:hover:text-red-500 md:hover:bg-transparent hover:animate-bounce"
              >
                Tech Specs
              </a>
            </li>
            <li>
              <a
                href="https://policies.google.com/privacy?hl=en-CA&fg=1"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:text-yellow-300 dark:hover:text-yellow-300 md:hover:bg-transparent hover:animate-bounce"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="http://robertoborges.ca"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:text-green-500 dark:hover:text-green-500 md:hover:bg-transparent hover:animate-bounce"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


