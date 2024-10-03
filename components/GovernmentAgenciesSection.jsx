import React from 'react';
import Image from 'next/image'; // Use for logos or representative images
import SectionHeading from './SectionHeading';

export default function GovernmentAgenciesSection() {
  return (
    <div className='bg-primary mt-[50px] mb-[50px]'>
    <section className="container mx-auto">
  
      <SectionHeading
      subheading="We Work"
      heading="We Work Closely With All Government Agencies"
      description="Our commitment to excellence is reflected in the partnerships we maintain with government agencies across the region. These collaborations help us deliver the highest standards of service." 
      textColor="text-white"
      textColorSubheading="text-primary"
      >
      </SectionHeading>

      
      {/* Agencies Logos / Icons */}
      <div className="pb-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center mt-[50px]">
        
        {/* Example logos */}
        <div className="flex justify-center">
          <Image 
            src="/assets/image/a2b-logo.png" 
            alt="Agency 1" 
            width={200} 
            height={100} 
            className="grayscale "
          />
        </div>
        
        <div className="flex justify-center">
          <Image 
            src="/assets/image/a2b-logo.png" 
            alt="Agency 2" 
            width={200} 
            height={100} 
            className="grayscale "
          />
        </div>

        <div className="flex justify-center">
          <Image 
            src="/assets/image/a2b-logo.png" 
            alt="Agency 3" 
            width={200} 
            height={100} 
            className="grayscale "
          />
        </div>

        <div className="flex justify-center">
          <Image 
            src="/assets/image/a2b-logo.png" 
            alt="Agency 4" 
            width={200} 
            height={100} 
            className="grayscale "
          />
        </div>

        <div className="flex justify-center">
          <Image 
            src="/assets/image/a2b-logo.png" 
            alt="Agency 5" 
            width={200} 
            height={100} 
            className="grayscale"
          />
        </div>
      </div>
    </section>

    </div>

  );
}
