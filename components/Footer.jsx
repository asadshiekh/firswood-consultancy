// components/Footer.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
    return (
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div>
              {/* <img src="/logo.png" alt="Company Logo" className="h-12 mb-4" /> */}
              <h2 className='text-white font-bold text-2xl mb-4'>Firswood Consultancy</h2>
              <p className="text-sm text-white">
                Our company provides top-notch services that help you grow and achieve your business goals. With years of experience, we ensure excellence in all our projects.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2">
                  <a href="/about" className="text-white">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="/services" className="text-white">Services</a>
                </li>
                <li className="mb-2">
                  <a href="/blog" className="text-white">Blog</a>
                </li>
                <li className="mb-2">
                  <a href="/contact" className="text-white">Contact Us</a>
                </li>
              </ul>
            </div>
  
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul>
                <li className="mb-2">
                  <a href="/careers" className="text-white">Careers</a>
                </li>
                <li className="mb-2">
                  <a href="/privacy" className="text-white">Privacy Policy</a>
                </li>
                <li className="mb-2">
                  <a href="/terms" className="text-white">Terms of Service</a>
                </li>
                <li className="mb-2">
                  <a href="/support" className="text-white">Support</a>
                </li>
              </ul>
            </div>
  
            {/* Social Links, Phone, and Address */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">
                <a href="tel:+1234567890" className="text-white">
                  <i className="fas fa-phone-alt"></i> +1 (234) 567-890
                </a>
              </p>
              <p className="mb-4">
                <a href="mailto:info@company.com" className="text-white">
                  <i className="fas fa-envelope"></i> info@company.com
                </a>
              </p>
              <p className="mb-4 text-white">
                <i className="fas fa-map-marker-alt"></i> 123 Business St, City, Country
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
  
          <div className="mt-8 border-t border-white pt-4 text-center">
            <p className="text-white text-sm">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  