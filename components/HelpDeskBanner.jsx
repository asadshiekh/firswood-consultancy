import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';

function HelpDeskBanner() {
  return (
    <div>
      <>
        <section className="bg-primary help_desk_section py-10 ">
          <div className="container mx-auto px-4"> {/* Added padding for mobile */}
            <div className="help_desk flex flex-col items-center md:flex-row md:items-center md:justify-between">
              
              {/* Title Section */}
              <h2 className="text-white font-bold text-3xl text-center md:text-left md:text-4xl mb-4 md:mb-0">
                Request a Schedule For <br /> Free Consultation
              </h2>
              
              {/* Button */}
              <button className="px-8 py-4 bg-white rounded-full text-lg font-medium mb-4 md:mb-0">
                REQUEST A SCHEDULE
              </button>
              
              {/* Dotted Border */}
              <div className="hidden md:block md:ml-10 md:border-r-2 border-dotted border-white h-24"></div>
              
              {/* Contact Section for Whatsapp */}
              <div className="flex flex-col md:flex-row items-center md:ml-10 mt-4 md:mt-0">
                <div className="flex items-center mb-4 md:mb-0">
                  <FaWhatsapp size="35" color="#fff" />
                  <h2 className="ml-5 text-xl text-white text-center md:text-left">
                    HELP DESK 24H/7 <br />
                    <Link href="tel:009850-9850">009850-9850</Link>
                  </h2>
                </div>

                {/* Contact Section for Email */}
                <div className="flex items-center md:ml-10 mt-4 md:mt-0">
                  <MdEmail size="35" color="#fff" />
                  <h2 className="ml-5 text-xl text-white text-center md:text-left">
                    Email us <br />
                    <Link href="mailto:abc@gmail.com">abc@gmail.com</Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default HelpDeskBanner;
