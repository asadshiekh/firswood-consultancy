// components/Navbar.js
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown'; // Import the Dropdown component
import Dropdown1 from './Dropdown1';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='py-3'>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center w-1/4 md:w-1/4">
          <Link href="/" className="text-2xl font-bold">
            Firswood Consultancy
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex w-3/4 justify-end space-x-6">
          <Link href="/about">
            About
          </Link>

          {/* Business Setup Dropdown */}
          <Dropdown
              label="Business Setup"
              link1="/service/business-setup-services"
              links={[
                { 
                  label: 'Business Setup UAE', 
                  href: '/service/business-setup-more',
                  subLinks: [
                    { 
                      label: 'Mainland', 
                      href: '/service/business-subsetup-2',
                      subLinks: [
                        { label: 'Dubai', href: '/service/third-level-setup-1' },
                        { label: 'Sharjah', href: '/service/third-level-setup-2' },
                        { label: 'Abu Dubai', href: '/service/third-level-setup-2' },
                        { label: 'RAK', href: '/service/third-level-setup-2' },
                      ]
                    },
                    
                    { 
                      label: 'Freezone', 
                      href: '/service/business-subsetup-2',
                      subLinks: [
                        { label: 'Dubai', href: '/service/third-level-setup-1' },
                        { label: 'Sharjah', href: '/service/third-level-setup-2' },
                        { label: 'Abu Dubai', href: '/service/third-level-setup-2' },
                        { label: 'RAK', href: '/service/third-level-setup-2' },
                      ]
                    },
                    { label: 'Free Zone', href: '/service/business-subsetup-1' },
                    { label: 'Off Shore', href: '/service/business-subsetup-1' },
                    { label: 'Company Formation Service UAE', href: '/service/business-subsetup-1' },
                    { 
                      label: 'Sub Setup 2', 
                      href: '/service/business-subsetup-2',
                      subLinks: [
                        { label: 'Third Level Setup 1', href: '/service/third-level-setup-1' },
                        { label: 'Third Level Setup 2', href: '/service/third-level-setup-2' }
                      ]
                    }
                  ]
                },
                
                { label: 'Business Setup in Other Location', href: '/service/business-setup-services' },
                { label: 'Business Support Services', href: '/service/business-setup-services' },
                { 
                  label: 'More Business Setup', 
                  href: '/service/business-setup-more',
                  subLinks: [
                    { label: 'Sub Setup 1', href: '/service/business-subsetup-1' },
                    { 
                      label: 'Sub Setup 2', 
                      href: '/service/business-subsetup-2',
                      subLinks: [
                        { label: 'Third Level Setup 1', href: '/service/third-level-setup-1' },
                        { label: 'Third Level Setup 2', href: '/service/third-level-setup-2' }
                      ]
                    }
                  ]
                },
              ]}
            />

          {/* Accounting & Tax Dropdown */}
          <Dropdown
            label="Accounting & Tax"
            link1="/service/bookkeeping-services"
            links={[
              { label: 'Accounting Service 1', href: '/service/bookkeeping-services' },
            ]}
          />


          <Dropdown
            label="Accounting & Tax"
            link1="/service/bookkeeping-services"
            links={[
              { label: 'Accounting Service 1', href: '/service/bookkeeping-services' },
              { 
                label: 'More Business Setup', 
                href: '/service/business-setup-more',
                subLinks: [
                  { label: 'Sub Setup 1', href: '/service/business-subsetup-1' },
                  { label: 'Sub Setup 2', href: '/service/business-subsetup-2' }
                ]
              },
            ]}
          />


          <Link href="/service/bookkeeping-services">
            IT
          </Link>
   

          <Dropdown
            label="insights"
            link1="/service/bookkeeping-services"
            links={[
              { label: 'Insights 1', href: '/service/bookkeeping-services' },
            ]}
          />

          <Link href="/contact">
            Contact Us
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>


            {/* Side Menu */}
            <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col p-4">
          <button
            onClick={toggleMenu}
            className="self-end text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Link href="/about" className="" onClick={toggleMenu}>
            About
          </Link>

          <Dropdown1     
          label="Business Setup"
            links={[
              { label: 'Business Setup 1', href: '/service/bookkeeping-services' },

            ]}    
          />

        <Dropdown1     
          label="Business Setup"
            links={[
              { label: 'Business Setup 1', href: '/service/business-setup-services' },

            ]}    
          />
  

          <Link href="/contact" className="" onClick={toggleMenu}>
            Contact
          </Link>

          
        </div>
      </div>

      {/* Overlay to close the menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

    
    </nav>
  );
};

export default Navbar;
