"use client"
import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <section className="bg-white shadow-md">
      <div className="container mx-auto p-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-10 mr-3" />
          <h1 className="text-xl font-bold">Your Company</h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            {/* Hamburger Icon */}
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>


        <nav
          className={`absolute inset-0 bg-white shadow-md transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:static md:translate-x-0`}
        >
       
          {isOpen && (
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

   
          <ul className="flex flex-col items-start space-y-4 p-6 md:flex-row md:space-x-4 md:space-y-0 md:p-0">
            <li>
              <a href="https://jumeiraconsultants.com/about-us/" className="text-gray-600 hover:text-blue-500">About Us</a>
            </li>
            <li className="relative group">
              <a href="https://jumeiraconsultants.com/service/business-setup-services/" className="text-gray-600 hover:text-blue-500">
                Business Setup <IoMdArrowDropdown />
              </a>
              <ul className="absolute left-0 hidden bg-white shadow-md group-hover:block">
                <li>
                  <a href="https://jumeiraconsultants.com/service/business-setup-services-in-uae/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Business Setup in UAE</a>
                </li>
                <li>
                  <a href="https://jumeiraconsultants.com/service/mainland/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Mainland</a>
                </li>
                <li>
                  <a href="https://jumeiraconsultants.com/service/dubai-freezone-company-formation/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Freezone</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://jumeiraconsultants.com/service/business-support-services/" className="text-gray-600 hover:text-blue-500">Business Support Services</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
