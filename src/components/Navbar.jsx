import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Pet Adoption</span>
          </a>
          <div className="flex md:order-2">
            <button type="button" className="text-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:text-white dark:hover:text-gray-700 dark:focus:ring-blue-800">
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;