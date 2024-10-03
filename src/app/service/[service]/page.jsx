import Image from 'next/image'
import Link from 'next/link';
import SectionHeading from '../../../../components/SectionHeading';
import SingleService from '../../../../components/SingleService';
import HelpDeskBanner from '../../../../components/HelpDeskBanner';
import ContactSection from '../../../../components/ContactSection';
import TestimonialSection from '../../../../components/TestimonialSection';
const servicesData = {
    'business-setup-services': {
      title: 'Business Setup Services',
      description: 'Comprehensive solutions for setting up your business.<br>',
    },
    'bookkeeping-services': {
      title: 'Bookkeeping Services',
      description: 'Reliable bookkeeping services to keep your finances in order.',
    },
    // Add more services here as needed
};

const ServicePage = ({ params }) => {
    const { service } = params; // Get the service from the URL params

    const serviceInfo = servicesData[service];

    if (!serviceInfo) {
        return <h1>Service not found</h1>; // Handle case where service does not exist
    }

    return (
        <>
            <section className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 py-12 px-8 lg:px-40">
              {/* Left side with heading, subheading, and paragraph */}
              <div className="lg:w-1/2 text-center lg:text-left lg:pr-8">
                <h4 className="text-blue-500 font-semibold text-lg">Subheading</h4>
                <h2 className="text-3xl font-bold my-4">{serviceInfo.title}</h2>
                <p className="mb-5">
                  {serviceInfo.description} Dubai stands as the epitome of modernity and progress within the UAE, witnessing exponential growth. Entrepreneurs worldwide are drawn to Dubai, recognizing its immense potential and promising future. The city boasts the highest concentration of free zones across the UAE, making it a magnet for investors.
                </p>
                <p className="mb-5">
                  When contemplating the establishment of a new company in Dubai, one pivotal factor to consider is the associated setup costs. What entices entrepreneurs most about company setup in Dubai is the direct tax-free status of its business zones.
                </p>
                <p className="mb-5">
                  In Dubai, one has the option to establish either a free zone company or an offshore company. A free zone company in Dubai grants full ownership to its founder, eliminating the need for an intermediary agent or sponsor.
                </p>
                <Link href="#" className='bg-primary py-2 px-8 rounded-full font-medium text-white text-lg'>Schedule a Call Back</Link>
              </div>

              {/* Right side with image */}
              <div className="lg:w-1/2 grid justify-items-end lg:ml-8">
                <Image
                  src="/assets/image/business-setup-services.webp" // Replace with your image path
                  alt="Descriptive Alt Text"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </section>

            <div className='mt-[50px] mb-[50px]'>


            <SectionHeading
              subheading="WHAT WE DO"
              heading="Our Business Solution: Powered by Experienced Minds"
              description="Our team of seasoned professionals brings a wealth of knowledge and proven strategies to the table. We'll work closely with you to develop a customized business solution that drives your goals forward."
              textColor="text-black"
              textColorSubheading="text-primary"></SectionHeading>



        <section className='services_section mt-[50px]'>
          <div className='container mx-auto text-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Service 1 */}
              <SingleService 
              label="Business Setup Service"
              icon=""
              description="Launch your Dubai business smoothly. We handle paperwork, permits, and legal requirements "    
              links="link-1"
              ></SingleService>

                {/* Service 1 */}
              <SingleService 
              label="Business Setup Service"
              icon=""
              description="Launch your Dubai business smoothly. We handle paperwork, permits, and legal requirements "    
              links="link-1"
              ></SingleService>

              {/* Service 1 */}
              <SingleService 
              label="Business Setup Service"
              icon=""
              description="Launch your Dubai business smoothly. We handle paperwork, permits, and legal requirements "    
              links="link-1"
              ></SingleService>
            </div>
          </div>
        </section>


            </div>

            <HelpDeskBanner></HelpDeskBanner>
            <TestimonialSection></TestimonialSection>
            <ContactSection></ContactSection>  

        </>
    );
};

// Get the dynamic route parameters
export async function generateStaticParams() {
    return Object.keys(servicesData).map(service => ({
        service,
    }));
}

export default ServicePage;
