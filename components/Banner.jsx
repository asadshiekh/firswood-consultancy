
import Image from 'next/image';
import Link from 'next/link';

function Banner() {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/assets/image/home-banner.webp")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Container for content */}
      <div className="container mx-auto h-full relative z-20 pl-2">
        <div className="flex h-full items-center">
          <div className="text-left">
            <h1 className="text-white text-5xl lg:text-6xl font-bold">
              Business Solutions
              <br />
              For All Enterprises
            </h1>
            <p className="text-white text-lg mt-4 w-full  lg:w-8/12 mb-5">
              Leverage our expertise to navigate complexities, optimize
              operations, and achieve sustainable growth.
            </p>

            <button className='bg-primary py-2 px-8 rounded-full font-medium text-white text-lg'>FREE CONSULTING</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;


