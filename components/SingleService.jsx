import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowUpRightDots } from 'react-icons/fa6';

export default function SingleService({ label, icon, description, links }) {
  return (
    <div className='service_item p-6 shadow-lg rounded-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out m-5 lg:m-0'>
      <div className='flex justify-center mb-3 text-5xl'> {/* Adjust icon size here */}
        {icon}
      </div>
      <h3 className='text-2xl font-medium mb-3 font-poppins'>{label}</h3>
      <p className='text-base mb-3'>
        {description} {/* Use the description prop for dynamic content */}
      </p>
      <div>
        <Link href={links} className='flex justify-center items-center border p-3 font-medium rounded-md'>
          READ MORE 
          <FaArrowUpRightDots className="ml-2 text-lg" /> {/* Add margin for spacing */}
        </Link>
      </div>
    </div>
  );
}
