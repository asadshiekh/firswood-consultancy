import React from 'react';
import Image from 'next/image'; // Use for logos or representative images
import SectionHeading from './SectionHeading';

export default function GovernmentAgenciesSection() {
  return (
    <div className=' mt-[50px] mb-[50px]'>
    <section className="container mx-auto">
  
      <SectionHeading
      subheading="We Work"
      heading="We Work Closely With All Government Agencies"
      description="Our commitment to excellence is reflected in the partnerships we maintain with government agencies across the region. These collaborations help us deliver the highest standards of service." 
      textColor="text-black"
      textColorSubheading="text-primary"
      >
      </SectionHeading>

      
      {/* Agencies Logos / Icons */}
      <div className="pb-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center mt-[50px]">
        
        {/* Example logos */}
        <div className="flex justify-center">
          <Image 
            src="/assets/image/Dubai-Airport-FreeZone.webp" 
            alt="Agency 1" 
            width={200} 
            height={100} 
            className=""
          />
        </div>
        
        <div className="flex justify-center">
          <Image 
            src="/assets/image/dubai-south.webp" 
            alt="Agency 2" 
            width={200} 
            height={100} 
            className=" "
          />
        </div>

        <div className="flex justify-center">
          <Image 
            src="/assets/image/JAFZA.webp" 
            alt="Agency 3" 
            width={200} 
            height={100} 
            className=" "
          />
        </div>

        <div className="flex justify-center">
          <Image 
            src="/assets/image/rak.webp" 
            alt="Agency 4" 
            width={200} 
            height={100} 
            className=""
          />
        </div>

        <div className="flex justify-center">
          <Image 
            src="/assets/image/UAQ.webp" 
            alt="Agency 5" 
            width={200} 
            height={100} 
            className=""
          />
        </div>

        <div className="flex justify-center">
          <Image 
            src="/assets/image/AJMAN-jumeira.webp" 
            alt="Agency 1" 
            width={200} 
            height={100} 
            className=""
          />
        </div>
        
        <div className="flex justify-center">
          <Image 
            src="/assets/image/DMCC-jumeira.webp" 
            alt="Agency 2" 
            width={200} 
            height={100} 
            className=" "
          />
        </div>

        <div className="flex justify-center">
          <Image 
            src="/assets/image/SHAMS.webp" 
            alt="Agency 3" 
            width={200} 
            height={100} 
            className=" "
          />
        </div>

        <div className="flex justify-center">
          <Image 
            src="/assets/image/KIZAD-jumeira.webp" 
            alt="Agency 4" 
            width={200} 
            height={100} 
            className=""
          />
        </div>

        <div className="flex justify-center mt-10">
          <Image 
            src="/assets/image/SAIF-Zone.webp" 
            alt="Agency 5" 
            width={200} 
            height={100} 
            className=""
          />
        </div>

        <div className="flex justify-center mt-10">
          <Image 
            src="/assets/image/UAE-MOE.webp" 
            alt="Agency 5" 
            width={200} 
            height={100} 
            className=""
          />
        </div>

        <div className="flex justify-center mt-10">
          <Image 
            src="/assets/image/Govt-of-Sharjah.webp" 
            alt="Agency 5" 
            width={200} 
            height={100} 
            className=""
          />
        </div>

        <div className="flex justify-center mt-10">
          <Image 
            src="/assets/image/RTA.webp" 
            alt="Agency 5" 
            width={200} 
            height={100} 
            className=""
          />
        </div>

        <div className="flex justify-center mt-10">
          <Image 
            src="/assets/image/dm.webp" 
            alt="Agency 5" 
            width={200} 
            height={100} 
            className=""
          />
        </div>



        

      </div>

 
    </section>

    </div>

  );
}
