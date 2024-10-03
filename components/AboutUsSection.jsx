// components/AboutUsSection.jsx
import { FaRegStar, FaHandsHelping, FaShieldAlt } from 'react-icons/fa'; // Import your desired icons
import SectionHeading from './SectionHeading';

export default function AboutUsSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <SectionHeading
          subheading="About Us"
          heading="Your Trusted Partner for Quality Solutions"
          description="We are a team of dedicated professionals committed to delivering high-quality services and solutions. Our mission is to help businesses thrive by offering innovative and tailored strategies that drive success." 
          textColor="text-black"
          textColorSubheading="text-primary"
        ></SectionHeading>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaRegStar className="w-12 h-12 text-primary mb-4" /> 
            <h3 className="text-xl font-medium  mt-4">Our Story</h3>
            <p className="mt-2 text-center">
              Founded in 2010, our company has grown into a trusted partner for businesses around the world, delivering quality and excellence in every project.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaHandsHelping className="w-12 h-12 text-primary mb-4" /> 
            <h3 className="text-xl font-medium  mt-4">Our Mission</h3>
            <p className="mt-2 text-center">
              To empower businesses with top-tier services and innovative solutions that pave the way for sustained growth and success.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaShieldAlt className="w-12 h-12 text-primary mb-4" /> 
            <h3 className="text-xl font-medium mt-4">Our Values</h3>
            <p className="mt-2 text-center">
              Integrity, innovation, and customer satisfaction are the core values that drive everything we do. We believe in building long-lasting relationships with our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
