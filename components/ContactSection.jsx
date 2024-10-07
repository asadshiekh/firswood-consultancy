// components/ContactSection.js
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function ContactSection() {
    return (
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: Company Information */}
            <div>
              <h2 className="text-3xl font-bold  mb-6">
                Contact Information
              </h2>
              <p className="text-lg mb-4">
                We are always here to help. Feel free to get in touch using the details below.
              </p>
  
              <div className="mb-4">
                <h3 className="text-lg font-medium">Email</h3>
                <p className="">info@company.com</p>
              </div>
  
              <div className="mb-4">
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="">+1 (234) 567-890</p>
              </div>
  
              <div className="mb-4">
                <h3 className="text-lg font-medium">Address</h3>
                <p className="">123 Business St, City, Country</p>
              </div>
  
              <div className="mb-4">
                <h3 className="text-lg font-medium">Opening Hours</h3>
                <p className="">Mon-Fri: 9 AM - 6 PM</p>
                <p className="">Sat-Sun: Closed</p>
              </div>
            </div>
  
            <div>
              <h2 className="text-3xl font-extrabold mb-6">
                Contact Us
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium "
                  >
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
  
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
  
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>
  
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-primary text-white font-medium rounded-md border border-transparent hover:border-black hover:bg-transparent hover:text-black transition-colors duration-300 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  