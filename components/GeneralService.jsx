import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SingleService from './SingleService';
import { FaBusinessTime } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { BsGraphDown } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import SectionHeading from './SectionHeading';

function GeneralService() {
  return (
    <div className='mt-[50px] mb-[50px]'>


        <SectionHeading
         subheading="WHAT WE DO"
          heading="Our Business Solution: Powered by Experienced Minds"
          description="Our team of seasoned professionals brings a wealth of knowledge and proven strategies to the table. We'll work closely with you to develop a customized business solution that drives your goals forward."
          textColor="text-black"
          textColorSubheading="text-primary"
        ></SectionHeading>

         {/* New Services Section */}
      <section className='services_section mt-[50px]'>
        <div className='container mx-auto text-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Service 1 */}

            <SingleService 
            label="Business Setup Service"
            icon={<FaBusinessTime />}
            description="Launch your Dubai business smoothly. We handle paperwork, permits, and legal requirements "    
            links="link-1"
            ></SingleService>
       
            <SingleService 
            label="Business Setup Service"
            icon={<FaCalculator />}
            description="Launch your Dubai business smoothly. We handle paperwork, permits, and legal requirements "    
            links="link-1"
            ></SingleService>
       

            <SingleService 
            label="Business Setup Service"
            icon={<FaLaptop />}
            description="Launch your Dubai business smoothly. We handle paperwork, permits, and legal requirements "    
            links="link-1"
            ></SingleService>
    


            <SingleService 
            label="Business Setup Service"
            icon={<FaBusinessTime />}
            description="Launch your Dubai business smoothly. We handle paperwork, permits, and legal requirements "    
            links="link-1"
            ></SingleService>
       


            <SingleService 
            label="Business Setup Service"
            icon={<BsGraphDown />}
            description="Launch your Dubai business smoothly. We handle paperwork, permits, and legal requirements "    
            links="link-1"
            ></SingleService>

            <SingleService 
            label="Business Setup Service"
            icon={<BsFillPeopleFill />}
            description="Launch your Dubai business smoothly. We handle paperwork, permits, and legal requirements "    
            links="link-1"
            ></SingleService>
         

          

          </div>
        </div>
      </section>



    </div>
  )
}

export default GeneralService