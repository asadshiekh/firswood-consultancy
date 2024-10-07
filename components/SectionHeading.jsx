import React from 'react'

function SectionHeading({ subheading, heading, description,textColor,textColorSubheading }) {
  return (
    <section className='our_service'>
        <div className='container mx-auto text-center'>
            <div className='heading_area'>
                <span className={`text-primary text-[16px] mb-3 font-bold ${textColorSubheading} `}>{subheading}</span>
                <h2 className={` my-3 font-bold text-4xl ${textColor} `}>{heading}</h2>
                <p className={` mx-auto w-full lg:w-8/12 ${textColor} `}>{description}</p>
            </div>
        </div>
    </section>
  )
}

export default SectionHeading