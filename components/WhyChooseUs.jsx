import React from 'react';
import Image from 'next/image';
import { AiFillCustomerService } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-center"> 

        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6 flex flex-col justify-center"> 
          <span className='text-primary text-center lg:text-left font-medium mb-2'>Firswood Consultancy</span>
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left w-full lg:w-3/5">We Help Our Clients to Achieve Their Goal?</h2> 
          <p className="text-lg mb-4 text-center md:text-left">
          We guide you from concept to success, providing expert solutions to realize your entrepreneurial vision. Our expertise unlocks your potential, transforming ideas into reality through customized business solutions.
          </p>
          <ul className="list-none">
            <li className="flex items-center mb-10 flex-col lg:flex-row">
              <span className="mb-2 lg:mb-0 lg:mr-4">
                <AiFillCustomerService size={40} />
              </span>
              <div>
                <h3 className="font-bold text-center lg:text-left">Customer Satisfaction</h3>
                <p className='text-center lg:text-left'>Your success is our passion. We go the extra mile to make you happy.</p>
              </div>
            </li>
            <li className="flex items-center mb-10 flex-col lg:flex-row">
              <span className="mb-2 lg:mb-0 lg:mr-4">
                <GrStatusGood size={40} />
              </span>
              <div>
                <h3 className="font-bold text-center lg:text-left">Quality, Our First Priority</h3>
                <p className='text-center lg:text-left'>Expect excellence in everything we do. Unwavering commitment to high standards.</p>
              </div>
            </li>
            <li className="flex items-center mb-10 flex-col lg:flex-row">
              <span className="mb-2 lg:mb-0 lg:mr-4">
                <MdOutlineMiscellaneousServices size={40} />
              </span>
              <div>
                <h3 className="font-bold text-center lg:text-left">Tailored Services</h3>
                <p className='text-center lg:text-left'>Solutions designed for you. We address your unique needs and goals.</p>
              </div>
            </li>
          </ul>

        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="px-4 md:px-0 w-full"> {/* Add horizontal padding for offsets */}
            <Image
              src="/assets/image/why-choose.webp" 
              alt="Why Choose Us"
              layout="responsive" 
              width={500} 
              height={300} 
              className="rounded-lg" // Adjusted class name to avoid the 's' in 'rounded-s-lg'
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
