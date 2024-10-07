import React from 'react';
import Image from 'next/image';
import SectionHeading from './SectionHeading';

export default function BlogSection() {
  return (
    <section className="container mx-auto px-4 mt-[50px] mb-[50px]">
      <SectionHeading
      subheading="BLOG & NEWS"
      heading="Our Latest News"
      description="Insights to elevate your Dubai business. Stay informed, stay ahead."
        textColor="text-black"
      textColorSubheading="text-primary"
      ></SectionHeading>

      {/* Blog Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[50px]">
        
        {/* Blog Post 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image 
            src="/assets/image/blog1.webp" 
            alt="Blog 1"
            width={600} 
            height={400} 
            layout="responsive"
            className="rounded-t-lg"
          />
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">September 25, 2024</p>
            <h3 className="text-xl font-bold mb-4">How to Boost Your SEO in 2024</h3>
            <p className="text-gray-700">Learn the latest SEO techniques to improve your ranking and drive traffic to your site.</p>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image 
            src="/assets/image/blog1.webp" 
            alt="Blog 2"
            width={600} 
            height={400} 
            layout="responsive"
            className="rounded-t-lg"
          />
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">September 22, 2024</p>
            <h3 className="text-xl font-bold mb-4">Top 10 Web Design Trends</h3>
            <p className="text-gray-700">Explore the top design trends that are taking over the web design industry.</p>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image 
            src="/assets/image/blog1.webp" 
            alt="Blog 3"
            width={600} 
            height={400} 
            layout="responsive"
            className="rounded-t-lg"
          />
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">September 20, 2024</p>
            <h3 className="text-xl font-bold mb-4">A Guide to Effective Content Marketing</h3>
            <p className="text-gray-700">Discover how to create content that resonates with your audience and drives conversions.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
