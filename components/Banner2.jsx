
import Image from 'next/image';
import Link from 'next/link';

function Banner({banner_title,description,button_text,button_link}) {
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
                {banner_title} <br/>
                Firswood Consultancy
            </h1>
            <p className="text-white text-lg mt-4 w-full  lg:w-8/12 mb-5">
              {description}
            </p>

            <Link href={button_link} className='bg-primary py-2 px-8 rounded-full font-medium text-white text-lg'>{button_text}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;


