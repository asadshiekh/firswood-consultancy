// components/TestimonialSection.js
import SectionHeading from './SectionHeading';
import Image from 'next/image';

export default function TestimonialSection() {
    const testimonials = [
      {
        name: "John Doe",
        position: "CEO, CompanyName",
        review:
          "The service was excellent and the team was always responsive. I couldn't be happier with the results!",
        imageUrl: "https://via.placeholder.com/48",
      },
      {
        name: "Jane Smith",
        position: "Founder, StartupName",
        review:
          "I've never worked with a more professional team. They exceeded all my expectations!",
        imageUrl: "https://via.placeholder.com/48",
      },
      {
        name: "Emily Brown",
        position: "Manager, CorpName",
        review:
          "Amazing work! The results were delivered on time and the quality was outstanding.",
        imageUrl: "https://via.placeholder.com/48",
      },
    ];
  
    return (
      <section className="bg-gray-100 py-12 mt-[50px] mb-[50px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
         subheading="What Our Customers Say"
          heading="Our Testimonial"
          description="Here's what some of our satisfied clients have to say about our services."
          textColor="text-black"
          textColorSubheading="text-primary"></SectionHeading>
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[50px] ">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg">&ldquo;{testimonial.review}&rdquo;</p>
                <div className="mt-4 flex items-center">
                  <div className="ml-4">
                    <div className="text-lg font-medium">
                      {testimonial.name}
                    </div>
                    <div className="text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  